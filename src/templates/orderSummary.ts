const orderSummary = (
  name: string,
  email: string,
  orderId: string,
  date: string,
  total: string,
  shippingFee: string,
  productName: string,
  price: string,
  quantity: string,
  line1: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
  image: string
): string => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Order Summary - Wrcked</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120%;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 12px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0 !important;
        }
        .es-m-p0r {
          padding-right: 0 !important;
        }
        .es-m-p0l {
          padding-left: 0 !important;
        }
        .es-m-p0t {
          padding-top: 0 !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        .es-m-p5 {
          padding: 5px !important;
        }
        .es-m-p5t {
          padding-top: 5px !important;
        }
        .es-m-p5b {
          padding-bottom: 5px !important;
        }
        .es-m-p5r {
          padding-right: 5px !important;
        }
        .es-m-p5l {
          padding-left: 5px !important;
        }
        .es-m-p10 {
          padding: 10px !important;
        }
        .es-m-p10t {
          padding-top: 10px !important;
        }
        .es-m-p10b {
          padding-bottom: 10px !important;
        }
        .es-m-p10r {
          padding-right: 10px !important;
        }
        .es-m-p10l {
          padding-left: 10px !important;
        }
        .es-m-p15 {
          padding: 15px !important;
        }
        .es-m-p15t {
          padding-top: 15px !important;
        }
        .es-m-p15b {
          padding-bottom: 15px !important;
        }
        .es-m-p15r {
          padding-right: 15px !important;
        }
        .es-m-p15l {
          padding-left: 15px !important;
        }
        .es-m-p20 {
          padding: 20px !important;
        }
        .es-m-p20t {
          padding-top: 20px !important;
        }
        .es-m-p20r {
          padding-right: 20px !important;
        }
        .es-m-p20l {
          padding-left: 20px !important;
        }
        .es-m-p25 {
          padding: 25px !important;
        }
        .es-m-p25t {
          padding-top: 25px !important;
        }
        .es-m-p25b {
          padding-bottom: 25px !important;
        }
        .es-m-p25r {
          padding-right: 25px !important;
        }
        .es-m-p25l {
          padding-left: 25px !important;
        }
        .es-m-p30 {
          padding: 30px !important;
        }
        .es-m-p30t {
          padding-top: 30px !important;
        }
        .es-m-p30b {
          padding-bottom: 30px !important;
        }
        .es-m-p30r {
          padding-right: 30px !important;
        }
        .es-m-p30l {
          padding-left: 30px !important;
        }
        .es-m-p35 {
          padding: 35px !important;
        }
        .es-m-p35t {
          padding-top: 35px !important;
        }
        .es-m-p35b {
          padding-bottom: 35px !important;
        }
        .es-m-p35r {
          padding-right: 35px !important;
        }
        .es-m-p35l {
          padding-left: 35px !important;
        }
        .es-m-p40 {
          padding: 40px !important;
        }
        .es-m-p40t {
          padding-top: 40px !important;
        }
        .es-m-p40b {
          padding-bottom: 40px !important;
        }
        .es-m-p40r {
          padding-right: 40px !important;
        }
        .es-m-p40l {
          padding-left: 40px !important;
        }
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: arial, 'helvetica neue', helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #ffffff">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ffffff"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #ffffff;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-header"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    class="es-header-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 25px;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://www.wrcked.com/images/wrcked.png"
                                      alt="Wrcked Logo"
                                      style="
                                        display: block;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        -ms-interpolation-mode: bicubic;
                                      "
                                      width="300"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 10px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        line-height: 31px;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        font-size: 26px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #333333;
                                      "
                                    >
                                      Thank you for your order, ${name}!
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 5px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 590px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <!--[if mso
                                      ]><a
                                        href="https://viewstripo.email"
                                        target="_blank"
                                        hidden
                                      >
                                        <v:roundrect
                                          xmlns:v="urn:schemas-microsoft-com:vml"
                                          xmlns:w="urn:schemas-microsoft-com:office:word"
                                          esdevVmlButton
                                          href="https://viewstripo.email"
                                          style="
                                            height: 39px;
                                            v-text-anchor: middle;
                                            width: 194px;
                                          "
                                          arcsize="0%"
                                          stroke="f"
                                          fillcolor="#666666"
                                        >
                                          <w:anchorlock></w:anchorlock>
                                          <center
                                            style="
                                              color: #ffffff;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              font-size: 14px;
                                              font-weight: 700;
                                              line-height: 14px;
                                              mso-text-raise: 1px;
                                            "
                                          >
                                            TRACK YOUR ORDER
                                          </center>
                                        </v:roundrect></a
                                      > <!
                                    [endif]--><!--[if !mso]><!-- --><span
                                      class="msohide es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #666666;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 0px;
                                        width: auto;
                                        mso-hide: all;
                                      "
                                      ><a
                                        href="https://www.wrcked.com/track-order?orderId=${orderId}&email=${email}"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #666666;
                                          border-width: 10px 20px 10px 20px;
                                          display: inline-block;
                                          background: #666666;
                                          border-radius: 0px;
                                          font-family: 'courier new', courier,
                                            'lucida sans typewriter',
                                            'lucida typewriter', monospace;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >TRACK YOUR ORDER</a
                                      ></span
                                    ><!--<![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 35px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: 36px;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        font-size: 24px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #282727;
                                      "
                                    >
                                      Order ID - ${orderId}
                                    </h2>
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        line-height: 21px;
                                        color: #282727;
                                        font-size: 14px;
                                      "
                                    >
                                      ${date}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        line-height: 21px;
                                        color: #282727;
                                        font-size: 14px;
                                      "
                                    >
                                      ITEMS ORDERED
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #a0937d;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="esdev-adapt-off"
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 20px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="esdev-mso-table"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            width: 560px;
                          "
                        >
                          <tr>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 125px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            font-size: 0px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://viewstripo.email"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #926b4a;
                                              font-size: 14px;
                                            "
                                            ><img
                                              class="adapt-img p_image"
                                              src="${image}"
                                              alt="Product"
                                              style="
                                                display: block;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                              height="225"
                                              title="Product"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="padding: 0; margin: 0; width: 20px"></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 125px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          class="es-m-p0t es-m-p0b es-m-txt-l"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-top: 20px;
                                            padding-bottom: 20px;
                                          "
                                        >
                                          <h3
                                            style="
                                              margin: 0;
                                              line-height: 24px;
                                              mso-line-height-rule: exactly;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              font-size: 20px;
                                              font-style: normal;
                                              font-weight: bold;
                                              color: #333333;
                                            "
                                          >
                                            ${productName}
                                          </h3>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="padding: 0; margin: 0; width: 20px"></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 176px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="right"
                                          class="es-m-p0t es-m-p0b"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-top: 20px;
                                            padding-bottom: 20px;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              line-height: 21px;
                                              color: #666666;
                                              font-size: 14px;
                                            "
                                            class="p_description"
                                          >
                                            ×${quantity}
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="padding: 0; margin: 0; width: 20px"></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 74px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="right"
                                          class="es-m-p0t es-m-p0b"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-top: 20px;
                                            padding-bottom: 20px;
                                          "
                                        >
                                          <p
                                            class="p_price"
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              line-height: 21px;
                                              color: #666666;
                                              font-size: 14px;
                                            "
                                          >
                                            ${price}
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #a0937d;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="esdev-adapt-off"
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="esdev-mso-table"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            width: 560px;
                          "
                        >
                          <tr>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 466px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="right"
                                          style="padding: 0; margin: 0"
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              line-height: 21px;
                                              color: #666666;
                                              font-size: 14px;
                                            "
                                          >
                                            Subtotal<br />Sales tax<br />Shipping<br /><b
                                              >Total
                                              (${quantity}&nbsp;${
    +quantity <= 1 ? "item" : "items"
  })</b
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="padding: 0; margin: 0; width: 20px"></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0; width: 74px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="right"
                                          style="padding: 0; margin: 0"
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              line-height: 21px;
                                              color: #666666;
                                              font-size: 14px;
                                            "
                                          >
                                            ${total}<br />$0.00<br />${shippingFee}<br /><strong
                                              >${total}</strong
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 20px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        line-height: 21px;
                                        color: #272728;
                                        font-size: 14px;
                                      "
                                    >
                                      SHIPPING ADDRESS
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #a0937d;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: 'courier new', courier,
                                          'lucida sans typewriter',
                                          'lucida typewriter', monospace;
                                        line-height: 21px;
                                        color: #666666;
                                        font-size: 14px;
                                      "
                                    >
                                      ${name}<br />${line1}<br />${city}
                                      ${state}<br />${postalCode}<br />${country}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <!--[if mso
                                      ]><a
                                        href="https://viewstripo.email"
                                        target="_blank"
                                        hidden
                                      >
                                        <v:roundrect
                                          xmlns:v="urn:schemas-microsoft-com:vml"
                                          xmlns:w="urn:schemas-microsoft-com:office:word"
                                          esdevVmlButton
                                          href="https://viewstripo.email"
                                          style="
                                            height: 39px;
                                            v-text-anchor: middle;
                                            width: 194px;
                                          "
                                          arcsize="0%"
                                          stroke="f"
                                          fillcolor="#666666"
                                        >
                                          <w:anchorlock></w:anchorlock>
                                          <center
                                            style="
                                              color: #ffffff;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              font-size: 14px;
                                              font-weight: 700;
                                              line-height: 14px;
                                              mso-text-raise: 1px;
                                            "
                                          >
                                            TRACK YOUR ORDER
                                          </center>
                                        </v:roundrect></a
                                      > <!
                                    [endif]--><!--[if !mso]><!-- --><span
                                      class="msohide es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #666666;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 0px;
                                        width: auto;
                                        mso-hide: all;
                                      "
                                      ><a
                                        href="https://www.wrcked.com/track-order?orderId=${orderId}&email=${email}"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #666666;
                                          border-width: 10px 20px 10px 20px;
                                          display: inline-block;
                                          background: #666666;
                                          border-radius: 0px;
                                          font-family: 'courier new', courier,
                                            'lucida sans typewriter',
                                            'lucida typewriter', monospace;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >TRACK YOUR ORDER</a
                                      ></span
                                    ><!--<![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: #e3cdc1;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  align="center"
                  bgcolor="#ffffff"
                  style="padding: 0; margin: 0; background-color: #ffffff"
                >
                  <table
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 30px;
                          padding-bottom: 30px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td style="padding: 0; margin: 0">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      class="es-menu"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr class="links">
                                        <td
                                          align="center"
                                          valign="top"
                                          width="25%"
                                          id="esd-menu-id-0"
                                          style="
                                            margin: 0;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            border: 0;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="mailto:art@wrcked.com"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              display: block;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              color: #666666;
                                              font-size: 14px;
                                              text-decoration: underline;
                                            "
                                            >Support</a
                                          >
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="25%"
                                          id="esd-menu-id-2"
                                          style="
                                            margin: 0;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            border: 0;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.wrcked.com/faq"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              display: block;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              color: #666666;
                                              font-size: 14px;
                                              text-decoration: underline;
                                            "
                                            >FAQ</a
                                          >
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="25%"
                                          id="esd-menu-id-2"
                                          style="
                                            margin: 0;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            border: 0;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.wrcked.com/shop/all"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              display: block;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              color: #666666;
                                              font-size: 14px;
                                              text-decoration: underline;
                                            "
                                            >Shop</a
                                          >
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="25%"
                                          id="esd-menu-id-2"
                                          style="
                                            margin: 0;
                                            padding-left: 5px;
                                            padding-right: 5px;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            border: 0;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://instagram.com/wrcked"
                                            style="
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              display: block;
                                              font-family: 'courier new',
                                                courier,
                                                'lucida sans typewriter',
                                                'lucida typewriter', monospace;
                                              color: #666666;
                                              font-size: 14px;
                                              text-decoration: underline;
                                            "
                                            >Instagram</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
};

export default orderSummary;
