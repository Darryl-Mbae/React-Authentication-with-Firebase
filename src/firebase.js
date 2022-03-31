import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup,
    signInWithEmailAndPassword,RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsNv65zUSZt-DCjCrRoyQG2G32zo8U_8",
  authDomain: "authentication-644e3.firebaseapp.com",
  projectId: "authentication-644e3",
  storageBucket: "authentication-644e3.appspot.com",
  messagingSenderId: "283188252103",
  appId: "1:283188252103:web:395e84878ae462c170dde2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = signupForm.email.value
  const password = signupForm.password.value
  const displayName = signupForm.displayName.value
  const error = document.getElementById("Error")
createUserWithEmailAndPassword(auth, email, password,displayName)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.alert("A user has been Created you can now sign in")
    window.location.reload();
    
    signupForm.reset()
  })
  .catch(err => {
    console.log(err.message)
    if(password == ""){
      error.textContent = "Put in a password";
      error.style.color = "red";
      }
      if(email == ""){
        error.textContent = "Enter an email address";
        error.style.color = "red";
        }
        if(displayName == ""){
          error.textContent = "Enter your Full Namw";
          error.style.color = "red";
          }
      if(password == "",displayName == "",email == ""){
      error.textContent = "Fill in the form";
      error.style.color = "red";
      }
      else{
      error.innerHTML = "Error creating User try different password <br>OR<br>Sign in through Google";
      error.style.color = "tomato";
      }
      
    
  })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value
  const error = document.getElementById("error")
  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      window.alert("Logged In")
      window.location.replace("https://mbaraki.netlify.app/index.html")
      loginForm.reset()
    })
    .catch(err => {
        if (err.message == "Firebase: Error (auth/invalid-email)." ) {
          error.textContent = "Input Data";
          error.style.color = "red";
          } if (err.message == "Firebase: Error (auth/user-not-found)."){
            error.textContent = "Please enter a valid email";
            error.style.color = "red";
          }if (err.message == "Firebase: Error (auth/wrong-password)."){
            error.textContent = "Please enter a valid password";
            error.style.color = "red";
            loginForm.reset()
          }
          if(password == ""){
          error.textContent = "Put in a password";
          error.style.color = "red";
          }
          if(email == ""){
            error.textContent = "Enter an Email Address";
            error.style.color = "red";
            }
})
})

const forgot = document.querySelector('.forgot')
forgot.addEventListener('click', (e) => {
  e.preventDefault()
  
  const error = document.getElementById("error")
  if (loginForm.email.value == ""){
    error.textContent = "Enter an Email Address";
    error.style.color = "red";
            
    
  }
  else {
    error.textContent = "A reset email has been sent to your email";
    error.style.color = "red";
  const email = loginForm.email.value
  
  sendPasswordResetEmail(auth, email)
  
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    error.textContent = "An Error Occured";
    error.style.color = "red";
  });
}
}
)

const google = document.querySelector('.google')
google.addEventListener('click', (e) => {

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    window.location.replace("https://mbaraki.netlify.app/index.html")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})
const google2 = document.querySelector('.google2')
google2.addEventListener('click', (e) => {

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    window.location.replace("https://mbaraki.netlify.app/index.html")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})
const apple = document.querySelector('.apple')
apple.addEventListener('click', (e) => {
  window.alert("Apple sign in coming soon")
})
const apple2 = document.querySelector('.apple2')
apple2.addEventListener('click', (e) => {
  window.alert("Apple sign in coming soon")
})
const windows = document.querySelector('.windows')
windows.addEventListener('click', (e) => {
  window.alert("Microsoft sign in coming soon")
})
const windows2 = document.querySelector('.windows2')
windows2.addEventListener('click', (e) => {
  window.alert("Microsoft sign in coming soon")
})