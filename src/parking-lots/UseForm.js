import { useEffect, useState } from "react";
import useURL from "./useURL";
import axios from "axios";

const useForm = () => {
    const URL = 'http://localhost:3000/';
    const USERLIST = useURL(URL + 'userlist/');
    const REQUESTLIST = useURL(URL + 'bookings/');
    const USERDATA2 = useURL(URL + 'id2/');
    const USERDATA3 = useURL(URL + 'id3/');
    const USERDATA4 = useURL(URL + 'id4/');
    const USERDATA5 = useURL(URL + 'id5/');
    const USERDATA6 = useURL(URL + 'id6/');
    const [userInput, setUserInput] = useState({
        loginValid: false,
        isAdmin: false,
        name: '',
        id: {}
    });
    const [errorInput, setErrorInput] = useState({});
    const [bookingError, setBookingError] = useState();
    const [bookings, setBookings] = useState([]);
    const [pending, setPending] = useState([]);
    const [bookDate, setBookDate] = useState({});
    const [selectedBooking, setSelectedBooking] = useState({});
    const [bookError, setBookError] = useState({});
    const [bookingId, setBookingId] = useState('');
    const [bookingPatch, setBookingPatch] = useState('');
    const [bookingDelete, setBookingDelete] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalApprove, setShowModalApprove] = useState(false);


    // Transfered handle to ValidateByFormik
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setErrorInput(validate(USERLIST, userInput));
    //     if (userInput.loginValid === true) {
    //         if (userInput.isAdmin === true) {
    //             setUser(userInput.name)
    //             nav('/admin')
    //         } else {
    //             setUser(userInput.name)
    //             nav('/userpage')
    //         }
    //     }
    // }

    const handleBook = () => {
        setShowModal(true)
    }

    const handleModalConfirm = () => {
        axios.post(URL + 'bookings/', {
            ...bookDate,
            status: 'pending'
        })
        .then((res) => console.log(res))
        setShowModal(false);
    }

    const closeModal = () => {
        setShowModal(false);
        setShowModalApprove(false);
    }

    const userId = localStorage.getItem('userId');
    useEffect(() => {
        if (userId) {
            fetch(URL + 'id' + userId + '/')
            .then((response) => response.json())
            .then((data) => setBookings(data))
        }
    }, [])

    // Handle button for approving a booking --by earl
    const handleApprove = (id) => {
        const userUrl = REQUESTLIST.filter((item) => item.id === id)
        console.log(userUrl[0].keyid)
        setSelectedBooking(userUrl[0]);
        setShowModalApprove(true);
        setBookingPatch(`${URL}${userUrl[0].userId}/${userUrl[0].keyid}`);
        setBookingDelete(`${URL}bookings/${id}`);
        setBookingId(id);
    }

    const handleModalApprove = () => {
        axios.delete(bookingDelete)
        .then((res) => {
            console.log(res)
            const newList = pending.filter((item) => item.id !== bookingId);
            setPending(newList);
        })
        .catch((err) => console.error(err))

        axios.patch(bookingPatch, {
            ...selectedBooking,
            status: 'Approved'
        })
        .then((res) => console.log(res))
        setShowModalApprove(false);
    }

    useEffect(() => {
        if (URL) {
            fetch(`${URL}bookings/`)
            .then((response) => response.json())
            .then((data) => setPending(data))
        }
    }, [])

    // Handle button for rejecting a booking --by earl
    const handleReject = (id) => {
        const userUrl = REQUESTLIST.filter((item) => item.id === id)
        console.log(userUrl[0].keyid)
        setSelectedBooking(userUrl[0]);
        setShowModal(true);
        setBookingPatch(`${URL}${userUrl[0].userId}/${userUrl[0].keyid}`);
        setBookingDelete(`${URL}bookings/${id}`);
        setBookingId(id);
    }
    console.log(bookingPatch)
    console.log(bookingDelete)
    console.log(bookingId)

    const handleModalReject = () => {
        axios.delete(bookingDelete)
        .then((res) => {
            console.log(res)
            const newList = pending.filter((item) => item.id !== bookingId);
            setPending(newList);
        })
        .catch((err) => console.error(err))

        axios.patch(bookingPatch, {
            ...selectedBooking,
            status: 'Rejected'
        })
        .then((res) => console.log(res))
        setShowModal(false);
    }
    
    // Handle button for canceling a booking --by earl
    const handleCancel = (id) => {
        axios.delete(URL + 'id' + localStorage.getItem('userId') + '/' + id)
        .then((res) => {
            console.log(res)
            const newList = bookings.filter((item) => item.id !== id);
            setBookings(newList);
        })
        .catch((err) => console.error(err))
    }

    return {
        userInput,
        errorInput,
        USERLIST,
        handleBook,
        bookingError,
        bookDate,
        showModal,
        showModalApprove,
        closeModal,
        handleModalConfirm,
        handleModalApprove,
        handleModalReject,
        handleReject,
        handleCancel,
        bookings,
        userId,
        handleApprove,
        bookError,
        setBookError,
        REQUESTLIST,
        pending
    }
}

export default useForm