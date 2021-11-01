import "./WidgetLg.css";

const WidgetLg = () => {

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
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Hristo  Ivanov - bat Ico</span>
                    </td>
                    <td className="widgetLgDate">20 august 2021</td>
                    <td className="widgetLgAmount">prokopiev she oprai smetkata</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Boyko Borisov - bat Boyko</span>
                    </td>
                    <td className="widgetLgDate">20 august 2021</td>
                    <td className="widgetLgAmount">50000 evra</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Stanislav Trifonov- bat Slavi</span>
                    </td>
                    <td className="widgetLgDate">20 august 2021</td>
                    <td className="widgetLgAmount">edno ferari davam(cherveno)</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rumen Radev - bat Rumba</span>
                    </td>
                    <td className="widgetLgDate">20 august 2021</td>
                    <td className="widgetLgAmount">20 letatelni chasa</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
