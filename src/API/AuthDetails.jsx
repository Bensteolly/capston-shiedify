import React, { useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';



const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

        useEffect(() => {
            const listen = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setAuthUser(user)
                } else{
                    setAuthUser(null)
                }
            });

                return() =>{
                    listen();
                }
        }, []);

            const userSignOut = async () => {
             try{
                await signOut(auth);
                console.log('Log out was successful');
                
             } catch (err) {
                console.err('Error logging out', err)

             }
        
            }
  return (
    <div>
        { authUser ? <><p>{`signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Log out</button></> : <div>logged out</div>}
    </div>
  )
}

export default AuthDetails