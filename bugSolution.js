To fix this, ensure you access the snapshot data within the `.then()` block of the promise or use async/await.  Here's an example using async/await:

```javascript
async function getData() {
  try {
    const snapshot = await db.collection('myCollection').doc('myDoc').get();
    if (snapshot.exists()) {
      const data = snapshot.data();
      console.log(data.myProperty);
    } else {
      console.log('Document does not exist');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
```
This ensures that the code waits for the promise to resolve before accessing `snapshot.data().myProperty`.  The example also includes error handling for more robust code.