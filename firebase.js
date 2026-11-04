const firebaseConfig = {
  apiKey: "AIzaSyDTBtDaYAhDv-ji0POY32misDrM_er8yAM",
  authDomain: "minigaemzdb.firebaseapp.com",
  projectId: "minigaemzdb",
  storageBucket: "minigaemzdb.firebasestorage.app",
  messagingSenderId: "735839893743",
  appId: "1:735839893743:web:c03e117aaff5a93b01c31a"
};

//Opret forbindelse til firebase
firebase.initializeApp(firebaseConfig)
console.log('Firebase startet med: ', firebaseConfig.projectId)


//vi får nu et firestore "objekt" som vi kan bruge til at kommunikere med firestore
var db = firebase.firestore()
console.log('forbindelse til firestore oprettet')   