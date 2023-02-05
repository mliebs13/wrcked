const orderSummary3 = (
  email: string,
  orderId: string,
  total: string,
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
    <style>
      /* CONFIG STYLES Please do not delete and edit CSS styles below */
      /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
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

      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #56d66b !important;
        border-color: #56d66b !important;
      }

      .es-button-border:hover {
        border-color: #42d159 #42d159 #42d159 #42d159 !important;
        background: #56d66b !important;
      }

      td .es-button-border:hover a.es-button-1673119927589 {
        background: #444444 !important;
        border-color: #444444 !important;
      }

      td .es-button-border-1673119927694:hover {
        background: #444444 !important;
        border-style: solid solid solid solid !important;
        border-color: #6d6d6d #6d6d6d #6d6d6d #6d6d6d !important;
      }

      [data-ogsb] .es-button.es-button-1673119927589 {
        padding: 15px 20px !important;
      }

      /*
END OF IMPORTANT
*/
      body {
        width: 100%;
        font-family: "courier new", courier, "lucida sans typewriter",
          "lucida typewriter", monospace;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
      }

      table td,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }

      .es-content,
      .es-header,
      .es-footer {
        table-layout: fixed !important;
        width: 100%;
      }

      img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p,
      hr {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: arial, "helvetica neue", helvetica, sans-serif;
      }

      p,
      ul li,
      ol li,
      a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
      }

      .es-left {
        float: left;
      }

      .es-right {
        float: right;
      }

      .es-p5 {
        padding: 5px;
      }

      .es-p5t {
        padding-top: 5px;
      }

      .es-p5b {
        padding-bottom: 5px;
      }

      .es-p5l {
        padding-left: 5px;
      }

      .es-p5r {
        padding-right: 5px;
      }

      .es-p10 {
        padding: 10px;
      }

      .es-p10t {
        padding-top: 10px;
      }

      .es-p10b {
        padding-bottom: 10px;
      }

      .es-p10l {
        padding-left: 10px;
      }

      .es-p10r {
        padding-right: 10px;
      }

      .es-p15 {
        padding: 15px;
      }

      .es-p15t {
        padding-top: 15px;
      }

      .es-p15b {
        padding-bottom: 15px;
      }

      .es-p15l {
        padding-left: 15px;
      }

      .es-p15r {
        padding-right: 15px;
      }

      .es-p20 {
        padding: 20px;
      }

      .es-p20t {
        padding-top: 20px;
      }

      .es-p20b {
        padding-bottom: 20px;
      }

      .es-p20l {
        padding-left: 20px;
      }

      .es-p20r {
        padding-right: 20px;
      }

      .es-p25 {
        padding: 25px;
      }

      .es-p25t {
        padding-top: 25px;
      }

      .es-p25b {
        padding-bottom: 25px;
      }

      .es-p25l {
        padding-left: 25px;
      }

      .es-p25r {
        padding-right: 25px;
      }

      .es-p30 {
        padding: 30px;
      }

      .es-p30t {
        padding-top: 30px;
      }

      .es-p30b {
        padding-bottom: 30px;
      }

      .es-p30l {
        padding-left: 30px;
      }

      .es-p30r {
        padding-right: 30px;
      }

      .es-p35 {
        padding: 35px;
      }

      .es-p35t {
        padding-top: 35px;
      }

      .es-p35b {
        padding-bottom: 35px;
      }

      .es-p35l {
        padding-left: 35px;
      }

      .es-p35r {
        padding-right: 35px;
      }

      .es-p40 {
        padding: 40px;
      }

      .es-p40t {
        padding-top: 40px;
      }

      .es-p40b {
        padding-bottom: 40px;
      }

      .es-p40l {
        padding-left: 40px;
      }

      .es-p40r {
        padding-right: 40px;
      }

      .es-menu td {
        border: 0;
      }

      .es-menu td a img {
        display: inline-block !important;
        vertical-align: middle;
      }

      /*END CONFIG STYLES*/
      s {
        text-decoration: line-through;
      }

      p,
      ul li,
      ol li {
        font-family: "courier new", courier, "lucida sans typewriter",
          "lucida typewriter", monospace;
        line-height: 150%;
      }

      ul li,
      ol li {
        margin-left: 0;
        margin-bottom: 15px;
      }

      a {
        text-decoration: underline;
      }

      .es-menu td a {
        text-decoration: none;
        display: block;
        font-family: "courier new", courier, "lucida sans typewriter",
          "lucida typewriter", monospace;
      }

      .es-wrapper {
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-wrapper-color,
      .es-wrapper {
        background-color: #f6f6f6;
      }

      .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-header-body {
        background-color: #ffffff;
      }

      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li {
        color: #333333;
        font-size: 14px;
      }

      .es-header-body a {
        color: #2cb543;
        font-size: 14px;
      }

      .es-content-body {
        background-color: #ffffff;
      }

      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li {
        color: #333333;
        font-size: 14px;
      }

      .es-content-body a {
        color: #2cb543;
        font-size: 14px;
      }

      .es-footer {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-footer-body {
        background-color: #ffffff;
      }

      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li {
        color: #333333;
        font-size: 14px;
      }

      .es-footer-body a {
        color: #ffffff;
        font-size: 14px;
      }

      .es-infoblock,
      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
      }

      .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
      }

      h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px;
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 24px;
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px;
      }

      a.es-button,
      button.es-button {
        border-style: solid;
        border-color: #31cb4b;
        border-width: 10px 20px 10px 20px;
        display: inline-block;
        background: #31cb4b;
        border-radius: 30px;
        font-size: 18px;
        font-family: arial, "helvetica neue", helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
      }

      .es-button-border {
        border-style: solid solid solid solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #2cb543;
        border-width: 0px 0px 2px 0px;
        display: inline-block;
        border-radius: 30px;
        width: auto;
      }

      .msohide {
        mso-hide: all;
      }

      /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
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
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
          text-align: left;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
          text-align: left;
        }
        .es-menu td a {
          font-size: 14px !important;
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
          display: inline-block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          display: inline-block !important;
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
          max-width: 100% !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
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
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
      /* END RESPONSIVE STYLES */
      html,
      body {
        font-family: arial, "helvetica neue", helvetica, sans-serif;
      }
      u + #body a {
        color: inherit !important;
        text-decoration: none !important;
        line-height: inherit !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        line-height: inherit !important;
      }
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        line-height: inherit !important;
      }
    </style>
  </head>

  <body id="body">
    <div class="es-wrapper-color">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr class="gmail-fix" height="0">
            <td>
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                align="center"
                width="600"
              >
                <tbody>
                  <tr>
                    <td
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      height="0"
                      style="line-height: 1px; min-width: 600px"
                    >
                      <img
                        src="https://tlr.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png"
                        width="600"
                        height="1"
                        style="
                          display: block;
                          max-height: 0px;
                          min-height: 0px;
                          min-width: 600px;
                          width: 600px;
                        "
                        alt
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td class="esd-email-paddings" valign="top">
              <table
                class="esd-header-popover es-header"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-header-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image"
                                              style="font-size: 0px"
                                            >
                                              <a target="_blank"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://www.wrcked.com/images/wrcked.png"
                                                  alt
                                                  style="display: block"
                                                  width="350"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-button"
                                              style="
                                              color: #ffffff;
                                              "
                                            >
                                              <!--[if mso
                                                ]><a
                                                  href="https://www.wrcked.com/track-order?orderId=${orderId}&email=${email}"
                                                  target="_blank"
                                                  hidden
                                                >
                                                  <v:roundrect
                                                    xmlns:v="urn:schemas-microsoft-com:vml"
                                                    xmlns:w="urn:schemas-microsoft-com:office:word"
                                                    esdevVmlButton
                                                    href="https://www.wrcked.com/track-order?orderId=${orderId}&email=${email}"
                                                    style="
                                                      color: #ffffff;
                                                      height: 49px;
                                                      v-text-anchor: middle;
                                                      width: 194px;
                                                    "
                                                    arcsize="0%"
                                                    stroke="f"
                                                    fillcolor="#555555"
                                                  >
                                                    <w:anchorlock></w:anchorlock>
                                                    <center
                                                      style="
                                                        color: #ffffff;
                                                        font-family: 'courier new',
                                                          courier,
                                                          'lucida sans typewriter',
                                                          'lucida typewriter',
                                                          monospace;
                                                        font-size: 16px;
                                                        font-weight: 700;
                                                        line-height: 16px;
                                                        mso-text-raise: 1px;
                                                      "
                                                    >
                                                      <span style="color:#ffffff;">TRACK YOUR ORDER</span>
                                                    </center>
                                                  </v:roundrect></a
                                                >
                                              <![endif]-->
                                              <!--[if !mso]><!-- --><span
                                                class="msohide es-button-border-1673119927694 es-button-border"
                                                style="
                                                  border-radius: 0px;
                                                  border-color: #555555;
                                                  background: #555555;
                                                  border-width: 0px;
                                                "
                                                ><a
                                                  href="https://google.com"
                                                  class="es-button es-button-1673119927589"
                                                  target="_blank"
                                                  style="
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                    font-size: 16px;
                                                    font-weight: bold;
                                                    background: #555555;
                                                    border-color: #555555;
                                                    border-radius: 0px;
                                                    border-width: 15px 20px;
                                                  "
                                                  >TRACK YOUR ORDER</a
                                                ></span
                                              >
                                              <!--<![endif]-->
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="es-p20t es-p20r es-p20l esd-structure"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="560"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#ffffff"
                                        style="
                                          border-left: 1px solid #000000;
                                          border-right: 1px solid #000000;
                                          border-top: 1px solid #000000;
                                          border-bottom: 1px solid #000000;
                                          background-color: #ffffff;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-text es-p30t es-p30b es-p10r es-p10l"
                                            >
                                              <p
                                                style="
                                                  line-height: 200%;
                                                  font-family: 'courier new',
                                                    courier,
                                                    'lucida sans typewriter',
                                                    'lucida typewriter',
                                                    monospace;
                                                  font-size: 16px;
                                                  color: #000000;
                                                "
                                              >
                                                ORDER SUCCESSFUL<br />THANK YOU
                                                FOR ORDERING ON <span style="color:#000000;">WRCKED.COM</span>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="esd-footer-popover es-footer"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-footer-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image"
                                              style="font-size: 0px"
                                            >
                                              <a target="_blank"
                                                ><img
                                                  class="adapt-img"
                                                  src="${image}"
                                                  alt
                                                  style="display: block"
                                                  height="275"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                            >
                                              <p
                                                style="
                                                  font-family: 'courier new',
                                                    courier,
                                                    'lucida sans typewriter',
                                                    'lucida typewriter',
                                                    monospace;
                                                  color: #000000;
                                                "
                                              >
                                                SUMMARY ${productName}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="esd-structure es-p20" align="left">
                              <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="278" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="278"
                                      class="es-m-p20b esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          border-left: 1px solid #000000;
                                          border-right: 1px solid #000000;
                                          border-top: 1px solid #000000;
                                          border-bottom: 1px solid #000000;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image es-p10"
                                              style="font-size: 0px"
                                            >
                                              <a target="_blank"
                                                ><img
                                                  class="adapt-img"
                                                  src="${image}"
                                                  alt
                                                  style="display: block"
                                                  height="196px"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="5"></td><td width="277" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                              >
                                <tbody>
                                <tr>
                                    <td
                                      width="277"
                                      align="left"
                                      class="esd-container-frame"
                                      esdev-config="h1"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          border-left: 1px solid #000000;
                                          border-right: 1px solid #000000;
                                          border-top: 1px solid #000000;
                                          border-bottom: 1px solid #000000;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p10t es-p10b es-p5r es-p5l"
                                            >
                                              <p style="color: #000000">
                                                <span
                                                  style="
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  ><strong
                                                    >${productName}</strong
                                                  ></span
                                                ><br /><span
                                                  style="
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  >QUANTITY: ${quantity}</span
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #000000;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p10t es-p10b es-p5r es-p5l"
                                            >
                                              <p
                                                style="
                                                  max-height: 21px;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  line-height: 21px;
                                                  color: #000000;
                                                  font-size: 14px;
                                                "
                                              >
                                                <span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: left;
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  >SUBTOTAL</span
                                                ><b
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: right;
                                                  "
                                                  ><span
                                                    style="
                                                      font-family: 'courier new',
                                                        courier,
                                                        'lucida sans typewriter',
                                                        'lucida typewriter',
                                                        monospace;
                                                    "
                                                    >${total}</span
                                                  ></b
                                                >
                                              </p>
                                              <p
                                                style="
                                                  max-height: 21px;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  line-height: 21px;
                                                  color: #000000;
                                                  font-size: 14px;
                                                "
                                              >
                                                <span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: left;
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  >SHIPPING</span
                                                ><span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: right;
                                                  "
                                                  ><span
                                                    style="
                                                      font-family: 'courier new',
                                                        courier,
                                                        'lucida sans typewriter',
                                                        'lucida typewriter',
                                                        monospace;
                                                    "
                                                    >FREE</span
                                                  ></span
                                                >
                                              </p>
                                              <p
                                                style="
                                                  max-height: 21px;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  line-height: 21px;
                                                  color: #000000;
                                                  font-size: 14px;
                                                "
                                              >
                                                <span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: left;
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  >TAXES</span
                                                ><span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: right;
                                                  "
                                                  ><span
                                                    style="
                                                      font-family: 'courier new',
                                                        courier,
                                                        'lucida sans typewriter',
                                                        'lucida typewriter',
                                                        monospace;
                                                    "
                                                    >FREE</span
                                                  ></span
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #000000;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p10t es-p35b es-p5r es-p5l"
                                            >
                                              <strong
                                                style="
                                                  max-height: 16px;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  line-height: 21px;
                                                  color: #000000;
                                                  font-size: 14px;
                                                "
                                              >
                                                <span
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: left;
                                                    font-family: 'courier new',
                                                      courier,
                                                      'lucida sans typewriter',
                                                      'lucida typewriter',
                                                      monospace;
                                                  "
                                                  >TOTAL</span
                                                ><b
                                                  style="
                                                    display: inline-block;
                                                    width: 50%;
                                                    text-align: right;
                                                  "
                                                  ><span
                                                    style="
                                                      font-family: 'courier new',
                                                        courier,
                                                        'lucida sans typewriter',
                                                        'lucida typewriter',
                                                        monospace;
                                                    "
                                                    >${total}</span
                                                  ></b
                                                >
                                              </strong>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-text"
                                            >
                                              <p
                                                style="
                                                  font-family: 'courier new',
                                                    courier,
                                                    'lucida sans typewriter',
                                                    'lucida typewriter',
                                                    monospace;
                                                  color: #000000;
                                                "
                                              >
                                                VISIT: <span style="color:#000000;">WRCKED.COM</span>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-menu"
                                              esd-tmp-menu-font-family="'courier new',courier,'lucida sans typewriter','lucida typewriter',monospace"
                                              esd-tmp-menu-padding="20|20"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                                class="es-menu"
                                              >
                                                <tbody>
                                                  <tr class="links">
                                                    <td
                                                      align="center"
                                                      valign="top"
                                                      width="50%"
                                                      class="es-p10t es-p10b es-p5r es-p5l"
                                                      style="
                                                        padding-top: 20px;
                                                        padding-bottom: 20px;
                                                        color: #000000;
                                                      "
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://www.wrcked.com/terms.html"
                                                        style="
                                                          color: #000000;
                                                          font-family: 'courier new',
                                                            courier,
                                                            'lucida sans typewriter',
                                                            'lucida typewriter',
                                                            monospace;
                                                        "
                                                        >TERMS</a
                                                      >
                                                    </td>
                                                    <td
                                                      align="center"
                                                      valign="top"
                                                      width="50%"
                                                      class="es-p10t es-p10b es-p5r es-p5l"
                                                      style="
                                                        padding-top: 20px;
                                                        padding-bottom: 20px;
                                                        color: #000000;
                                                      "
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://www.wrcked.com/privacy-policy.html"
                                                        style="
                                                          font-family: 'courier new',
                                                            courier,
                                                            'lucida sans typewriter',
                                                            'lucida typewriter',
                                                            monospace;
                                                          color: #000000;
                                                        "
                                                        >PRIVACY</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
  `;
};

export default orderSummary3;
