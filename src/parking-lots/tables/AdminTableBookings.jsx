import useForm from "../UseForm"
import useURL from "../useURL";

const AdminTableBookings = () => {
    const URL = 'http://localhost:3000/';
    const USERDATA2 = useURL(URL + 'id2/');
    const USERDATA3 = useURL(URL + 'id3/');
    const USERDATA4 = useURL(URL + 'id4/');
    const ALLUSERSDATA = [...USERDATA2, ...USERDATA3, ...USERDATA4];
    const sorted = ALLUSERSDATA.sort((a,b) => b.date - a.date)
    const {
        handleCancel
    } = useForm()
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th className="p-3 txt-ctr">Bookings</th>
                    <th className="p-3 txt-ctr">Dates</th>
                    <th className="p-3 txt-ctr">Slots</th>
                    <th className="p-3 txt-ctr">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    sorted.map((item, idx) => (
                        <tr key={idx}>
                            <td className="p-3 txt-ctr">{ item.date }</td>
                            <td className="p-3 txt-ctr">{ item.time }</td>
                            <td className="p-3 txt-ctr">{ item.slot }</td>
                            <td className="txt-ctr">
                                { item.date < disablePastDate() ? 
                                    ('Expired') :
                                    (<button className="btn btn-danger"
                                        onClick={() => handleCancel(item.id)}
                                        >Cancel
                                    </button>)
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default AdminTableBookings