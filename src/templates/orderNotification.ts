const orderNotification = (
  orderId: string,
  date: string,
  productName: string,
  image: string,
  quantity: string,
  price: string,
  total: string
): string => {
  return `
  <!DOCTYPE HTML
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title>Order Notification - Wrcked</title>

  <style type="text/css">
      @media only screen and (min-width: 620px) {
          .u-row {
              width: 600px !important;
          }

          .u-row .u-col {
              vertical-align: top;
          }

          .u-row .u-col-50 {
              width: 300px !important;
          }

          .u-row .u-col-100 {
              width: 600px !important;
          }

      }

      @media (max-width: 620px) {
          .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
          }

          .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
          }

          .u-row {
              width: calc(100% - 40px) !important;
          }

          .u-col {
              width: 100% !important;
          }

          .u-col>div {
              margin: 0 auto;
          }

          .no-stack .u-col {
              min-width: 0 !important;
              display: table-cell !important;
          }

          .no-stack .u-col-100 {
              width: 100% !important;
          }

      }

      body {
          margin: 0;
          padding: 0;
      }

      table,
      tr,
      td {
          vertical-align: top;
          border-collapse: collapse;
      }

      p {
          margin: 0;
      }

      .ie-container table,
      .mso-container table {
          table-layout: fixed;
      }

      * {
          line-height: inherit;
      }

      a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
      }

      table,
      td {
          color: #000000;
      }

      a {
          color: #0000ee;
          text-decoration: underline;
      }

      @media (max-width: 480px) {
          #u_content_image_1 .v-src-width {
              width: auto !important;
          }

          #u_content_image_1 .v-src-max-width {
              max-width: 65% !important;
          }

          #u_content_heading_1 .v-font-size {
              font-size: 22px !important;
          }

          #u_content_heading_5 .v-text-align {
              text-align: center !important;
          }

          #u_content_heading_6 .v-text-align {
              text-align: center !important;
          }
      }
  </style>



  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet" type="text/css">
  <!--<![endif]-->

</head>

<body class="clean-body u_body"
  style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #eeeeee;color: #414141">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table
      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #eeeeee;width:100%"
      cellpadding="0" cellspacing="0">
      <tbody>
          <tr style="vertical-align: top">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #eeeeee;"><![endif]-->


                  <div class="u-row-container" style="padding: 0px;background-color: #414141">
                      <div class="u-row"
                          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div
                              style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #414141;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #414141;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                              <div class="u-col u-col-100"
                                  style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div style="background-color: #414141;height: 100%;width: 100% !important;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <!--<![endif]-->

                                          <table id="u_content_image_1" style="font-family:'Rubik',sans-serif;"
                                              role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                              border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 10px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <table width="100%" cellpadding="0" cellspacing="0"
                                                              border="0">
                                                              <tr>
                                                                  <td class="v-text-align"
                                                                      style="padding-right: 0px;padding-left: 0px;"
                                                                      align="center">

                                                                      <img align="center" border="0"
                                                                          src="https://cdn.templates.unlayer.com/assets/1656487470905-mail.png"
                                                                          alt="email icon" title="email icon"
                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 50%;max-width: 290px;"
                                                                          width="290"
                                                                          class="v-src-width v-src-max-width" />

                                                                  </td>
                                                              </tr>
                                                          </table>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <table id="u_content_heading_1" style="font-family:'Rubik',sans-serif;"
                                              role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                              border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 15px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <h1 class="v-text-align v-font-size"
                                                              style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: andale mono,times; font-size: 28px;">
                                                              <strong>Hey Admin, We received an order!</strong>
                                                          </h1>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <table style="font-family:'Rubik',sans-serif;" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <div class="v-text-align"
                                                              style="color: #ecf0f1; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                              <p style="font-size: 14px; line-height: 140%;"><span
                                                                      style="font-family: 'courier new', courier; font-size: 18px; line-height: 25.2px;"><strong>${date}</strong></span></p>
                                                          </div>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <table style="font-family:'Rubik',sans-serif;" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 40px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <div class="v-text-align"
                                                              style="color: #ecf0f1; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                              <p style="font-size: 14px; line-height: 140%;">
                                                                  <strong><span
                                                                          style="font-family: 'courier new', courier; font-size: 18px; line-height: 25.2px;">Order ID - ${orderId}</span></strong>
                                                              </p>
                                                          </div>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row"
                          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div
                              style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #eeeeee;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100"
                                  style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div
                                      style="background-color: #eeeeee;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--<![endif]-->

                                          <table style="font-family:'Rubik',sans-serif;" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 10px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <div class="v-text-align"
                                                              style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                              <p style="font-size: 14px; line-height: 140%;"> </p>
                                                          </div>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row"
                          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div
                              style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color: #eeeeee;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-50"
                                  style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                                  <div
                                      style="background-color: #eeeeee;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--<![endif]-->

                                          <table style="font-family:'Rubik',sans-serif;" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:5px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <table width="100%" cellpadding="0" cellspacing="0"
                                                              border="0">
                                                              <tr>
                                                                  <td class="v-text-align"
                                                                      style="padding-right: 0px;padding-left: 0px;"
                                                                      align="center">

                                                                      <img align="center" border="0"
                                                                          src="${image}"
                                                                          alt="Product" title="Product"
                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: auto;max-height: 250px;"
                                                                          width="290"
                                                                          class="v-src-width v-src-max-width" />

                                                                  </td>
                                                              </tr>
                                                          </table>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color: #eeeeee;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-50"
                                  style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                                  <div
                                      style="background-color: #eeeeee;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--<![endif]-->

                                          <table id="u_content_heading_5" style="font-family:'Rubik',sans-serif;"
                                              role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                              border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <h1 class="v-text-align v-font-size"
                                                              style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: courier new,courier; font-size: 18px;">
                                                              <strong>${productName}</strong>
                                                          </h1>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <table id="u_content_heading_6" style="font-family:'Rubik',sans-serif;"
                                              role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                              border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <h1 class="v-text-align v-font-size"
                                                              style="margin: 0px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: courier new,courier; font-size: 18px;">
                                                              Price: <strong> ${price}</strong>
                                                          </h1>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <table id="u_content_heading_5" style="font-family:'Rubik',sans-serif;"
                                              role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                              border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <h1 class="v-text-align v-font-size"
                                                          style="margin: 0px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: courier new,courier; font-size: 18px;">
                                                              Quantity: <strong>${quantity}</strong>
                                                          </h1>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row no-stack"
                          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div
                              style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="599" style="background-color: #ffffff;width: 599px;padding: 0px;border-top: 1px solid #CCC;border-left: 1px solid #CCC;border-right: 0px solid transparent;border-bottom: 1px solid #CCC;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100"
                                  style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div
                                      style="background-color: transparent;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--<![endif]-->

                                          <table style="font-family:'Rubik',sans-serif;" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <h1 class="v-text-align v-font-size"
                                                              style="margin: 0px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: courier new,courier; font-size: 18px;">
                                                              <strong>Total: ${total}</strong>
                                                          </h1>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                      </div>
                  </div>



                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                      <div class="u-row"
                          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div
                              style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #eeeeee;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100"
                                  style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div
                                      style="background-color: #eeeeee;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                      <!--[if (!mso)&(!IE)]><!-->
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--<![endif]-->

                                          <table style="font-family:'Rubik',sans-serif;background-color: '#eeeeee'" role="presentation"
                                              cellpadding="0" cellspacing="0" width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                      <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 15px 52px;font-family:'Rubik',sans-serif;"
                                                          align="left">

                                                          <div class="v-text-align" align="center">
                                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Rubik',sans-serif;"><tr><td class="v-text-align" style="font-family:'Rubik',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:180px;" arcsize="7.5%" stroke="f" fillcolor="#414141"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]-->
                                                              <a href="https://wrcked.com/22/admin/orders" target="_blank"
                                                                  style="box-sizing: border-box;display: inline-block;font-family:'Rubik',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #414141; border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                                  <span
                                                                      style="display:block;padding:15px 20px;line-height:120%;"><span
                                                                          style="font-family: 'courier new', courier; font-size: 18px; line-height: 21.6px;"><strong>Order
                                                                              Details</strong></span></span>
                                                              </a>
                                                              <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                                          </div>

                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>

                                          <!--[if (!mso)&(!IE)]><!-->
                                      </div>
                                      <!--<![endif]-->
                                  </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                      </div>
                  </div>


                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
          </tr>
      </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
  `;
};

export default orderNotification;
