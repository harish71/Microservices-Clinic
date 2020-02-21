export const setStoreUserDetails = userDetails => ({
   type: 'SET_USER_DETAILS',
   userDetails
});

//USEFUL FUNCTIONS

export const redirectByRole = (role, props) => {
    switch (role) {
        case "doctor":
            props.history.push("/doctor");
            return;
        case "assistant":
            props.history.push("/assistant");
            return;
        case "patient":
            props.history.push("/patient");
            return;
        default:
            return;
    }
};

export const getTokenByGivenLoginDetails  = (email, password, {setUserDetails}) => {
    const URL = 'http://localhost:8762/auth/login';
    const user = {
        "email": email,
        "password": password
    };
    fetch(URL, {
        method: 'POST',
        async: false,
        body: JSON.stringify(user)
    })
        .then((response) => response.json())
        .then((responseData) => {
            setUserDetails({
                uuid: responseData.uuid,
                role: responseData.role
            });
            localStorage.setItem("token", responseData.token);
        });
};

// export const checkUserByLocalToken = ({setUserDetails}) => {
//    const fetchData = fetch('http://localhost:8762/auth/login', {
//       method: 'GET',
//       async: false,
//       headers: {
//          'Authorization': localStorage.token,
//       }
//    });
//
//    fetchData
//        .then(response => {
//           return response.json();
//        })
//        .then(results => {
//            setUserDetails(results.uuid)
//        });
// };

// export const getInfo = ({setUserDetails}, userUUID) => {
//     let URL = 'http://localhost:8762/doctor-mssc/doctors/' + userUUID;
//     const fetchData = fetch(URL, {
//         method: 'GET',
//         async: false,
//         headers: {
//             'Authorization': localStorage.token,
//         }
//     });
//     console.log(URL);
//
//     fetchData
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(results => {
//             console.log(results)
//             // setUserDetails({
//             //
//             // })
//         });
// };
