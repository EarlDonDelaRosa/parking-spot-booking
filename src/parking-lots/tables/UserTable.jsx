import useForm from "../UseForm"

const UserTable = () => {
    const {
        bookings,
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
                    <th className="p-3 txt-ctr">BOOKING DATES</th>
                    <th className="p-3 txt-ctr">TIME (AM/PM/FULL)</th>
                    <th className="p-3 txt-ctr">PARKING SLOTS</th>
                    <th className="p-3 txt-ctr">STATUS</th>
                    <th className="p-3 txt-ctr">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings.map((item, idx) => (
                        <tr key={idx}>
                            <td className="p-3 txt-ctr">{ item.date }</td>
                            <td className="p-3 txt-ctr">{ item.time }</td>
                            <td className="p-3 txt-ctr">{ item.slot } Slots</td>
                            <td className="p-3 txt-ctr">{ item.status }</td>
                            <td className="txt-ctr">
                                { item.date < disablePastDate() ? 
                                    ('Already used') :
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

export default UserTable