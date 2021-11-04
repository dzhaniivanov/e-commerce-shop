import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [])



    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users?.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img src={user.img || "data:image/png;base64,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"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm;
