import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'theme-ui'

import Button from '../components/Buttons'

const ProductPageProductInformation = (props) => {
  const {
    longDescription,
    price,
    name,
    id,
    url,
    mainPhoto,
  } = props

  return (
    <div className={props.className}>
      <h1
        css={css({
          fontSize: [3, 3, 4],
          mb: 2,
        })}
      >
        {name}
      </h1>
      <span
        css={css({
          display: `block`,
          fontWeight: `bold`,
          mb: 4,
        })}
      >
        ${price}
      </span>
      {longDescription ? (
        <div
          dangerouslySetInnerHTML={{
            __html: longDescription.childMarkdownRemark.html,
          }}
        />
      ) : (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac justo
            et neque finibus lacinia. Nam eu nibh consectetur, scelerisque arcu
            ac, molestie quam. Nunc erat tortor, convallis a odio ut, pulvinar
            bibendum magna. Donec suscipit commodo arcu in mollis. Maecenas
            congue tellus in leo finibus, vitae aliquet ipsum luctus
          </p>
        </div>
      )}
      <hr
        css={css({
          color: `grey.light`,
        })}
      />
      <div
        css={css({
          display: `grid`,
          gridGap: 3,
        })}
      >
        <Button
          variant="default"
          className="snipcart-add-item snipcart-checkout"
          data-item-id={id}
          data-item-price={price}
          data-item-url={`https://localhost:8000${url}`}
          data-item-image={mainPhoto.file.url}
          data-item-name={name}
        >
          Add to cart
        </Button>
        <Button
          variant="dark"
          className="snipcart-add-item snipcart-checkout"
          data-item-id={id}
          data-item-price={price}
          data-item-url={`https://localhost:8000${url}`}
          data-item-image={mainPhoto.file.url}
          data-item-name={name}
        >
          Buy now
        </Button>
      </div>
    </div>
  )
}

export default ProductPageProductInformation

ProductPageProductInformation.propTypes = {
  longDescription: PropTypes.object,
  price: PropTypes.string,
  name: PropTypes.number,
}