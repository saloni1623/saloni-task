import axios from "axios";
import React, { useEffect, useState } from "react";
import './Table.css'

const tableHeading = ['#', 'PlaceName', 'Country']
const Table = ({ city, state }) => {

    const getFlag = async (file_type, country_code) => {
        const response = await axios.get(`https://www.countryflags.io/${file_type}/${country_code}`)

    }

    return (
        <table>

            <tr className="tablerow" >
                {tableHeading.map((element, i) => {
                    return (
                        <th>
                            {element}
                        </th>
                    )
                })}
            </tr>

            {state ? city.length ?
                city?.map((item, i) => {

                    return (
                        <tr>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.country}
                            </td>
                        </tr>

                    )
                }) : <div className="text"> No data found</div> : <div className="text">
                Start searching
            </div>}


        </table>
    )
}
export default Table