//@flow

import React from 'react'
import { MOBILE_IMG2 } from 'common/images'
import './styles.scss'

type Props = {
  onProductColorSelect: (event: any) => string
}
const ProductDescriptionTable = (props: Props) => {
  const { onProductColorSelect } = props
  return (
    <div className="tab-content">
      <div className="tab-pane fade in active" id="home">
        <table className="iphn-table">
          <tbody>
            <tr className="iphn-row">
              <th className="iphn-hdg">Body</th>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Width</td>
              <td className="iphn-col padd_lft">70.9mm</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Height</td>
              <td className="iphn-col padd_lft">143.6mm</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Thickness</td>
              <td className="iphn-col padd_lft">Weight</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Colors</td>
              <td className="iphn-col padd_lft">70.9mm</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Color</td>
              <td className="iphn-col iphn-flex">
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio">
                    <input
                      type="radio"
                      id="silver"
                      name="radio-group"
                      value="silver"
                      onChange={event =>
                        onProductColorSelect(event.target.value)
                      }
                    />
                    <label htmlFor="silver">Silver</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio grey">
                    <input
                      type="radio"
                      id="Grey"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="Grey">Space Grey</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio gold">
                    <input
                      type="radio"
                      id="Gold"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="Gold">Gold</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio gold">
                    <input
                      type="radio"
                      id="Pink"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="Pink">Pink</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio gold">
                    <input
                      type="radio"
                      id="White"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="White">White</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio gold">
                    <input
                      type="radio"
                      id="Red"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="Red">Red</label>
                  </div>
                </div>
                <div className="iphnimg-col">
                  <div className="compare">
                    <img src={MOBILE_IMG2} alt="product-color" />
                  </div>
                  <div className="custm_radio gold">
                    <input
                      type="radio"
                      id="Blue"
                      name="radio-group"
                      onChange={e => onProductColorSelect(e.target.value)}
                    />
                    <label htmlFor="Blue">Blue</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="iphn-row">
              <th className="iphn-hdg">Display</th>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Type</td>
              <td className="iphn-col padd_lft">16 M Super AMOLED</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Size</td>
              <td className="iphn-col padd_lft">62x134mm (2.44x5.28)</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Resolution</td>
              <td className="iphn-col padd_lft">1125x2436px</td>
            </tr>
            <tr className="iphn-row">
              <td className="iphn-col col-grey">Width</td>
              <td className="iphn-col padd_lft">70.9mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ProductDescriptionTable
