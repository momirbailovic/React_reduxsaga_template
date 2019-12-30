//@flow

import React, { Component, Fragment } from 'react'
import { MOBILE_IMG2 } from 'common/images'
import TableRow from 'components/common/TableRow'

import './styles.scss'

type productDescriptionData = {
  property: string,
  value: string
}
type Props = {
  productDescription: Array<productDescriptionData>,
  productColors: Array<Object>,
  productDisplayDescription: Array<Object>
}

class AddedItems extends Component<Props> {
  render() {
    const {
      productDescription,
      productColors,
      productDisplayDescription
    } = this.props
    return (
      <Fragment>
        <div className="vscol-2 vs2_box">
          <span className="vs-minus">
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
          <div className="box-img">
            <div className="vsbt-img">
              <img src={MOBILE_IMG2} alt="" />
            </div>
            <div className="vsbt-para">
              <p>Apple iPhone X</p>
            </div>
          </div>
          <table className="iphn-table box_tbl">
            <tbody>
              <tr className="iphn-row">
                <th className="iphn-hdg">Body</th>
              </tr>
              {productDescription &&
                productDescription.map((data, i) => {
                  return (
                    <TableRow
                      key={i}
                      rowStyle="iphn-row"
                      colPropertyStyle="iphn-col col-grey"
                      colValueStyle="iphn-col"
                      property={data.property}
                      value={data.value}
                    />
                  )
                })}
              <tr className="iphn-row flex_column">
                <td className="iphn-col col-grey">Color</td>
                <td className="iphn-col iphn-flex">
                  {productColors &&
                    productColors.map((item, i) => {
                      return (
                        <div className="iphnimg-col" key={i}>
                          <div className="compare">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="custm_radio">
                            <input
                              type="radio"
                              id={item.id}
                              name="radio-group"
                            />
                            <label htmlFor={item.id}>{item.name}</label>
                          </div>
                        </div>
                      )
                    })}
                </td>
              </tr>
              <tr className="iphn-row">
                <th className="iphn-hdg">Display</th>
              </tr>
              {productDisplayDescription &&
                productDisplayDescription.map((data, i) => {
                  return (
                    <TableRow
                      key={i}
                      rowStyle="iphn-row"
                      colPropertyStyle="iphn-col col-grey"
                      colValueStyle="iphn-col padd_lft"
                      property={data.property}
                      value={data.value}
                    />
                  )
                })}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default AddedItems
