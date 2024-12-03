const { Firestore } = require('@google-cloud/firestore');

async function findData() {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  const snapshot = await predictCollection.get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    history: doc.data(),
  }));
}

module.exports = findData;
