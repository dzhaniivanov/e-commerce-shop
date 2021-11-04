import "./WidgetLg.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

const WidgetLg = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getOrders();
    }, [])



    const Button = ({ type }) => {
        return (
            <button className={"widgetLgButton " + type}>{type}</button>
        )
    };



    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widigetLgTh">Customer</th>
                    <th className="widigetLgTh">Date</th>
                    <th className="widigetLgTh">Amount</th>
                    <th className="widigetLgTh">Status</th>
                </tr>
                {orders.map((order) => (
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{format(order.createdAt)}</td>
                        <td className="widgetLgAmount">{order.amount}</td>
                        <td className="widgetLgStatus"><Button type={order.status} /></td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default WidgetLg;
