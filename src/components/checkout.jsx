import React, { Fragment } from 'react'

export default function checkout() {
    var openchekout = (e) => {
        e.preventDefault();
        var handler = window.ePayco.checkout.configure({
          key: "491d6a0b6e992cf924edd8d3d088aff1",
          test: true,
        });
        let data = {
          name: "Prueba ePayco React",
          description: "Prueba ePayco React",
          invoice: Math.floor(Math.random() * (3999999 - 1)) + 1,
          currency: "cop",
          amount: "119000",
          tax_base: "100000",
          tax: "19000",
          country: "co",
          lang: "es",
          external: "false",
          extra1: "extra1",
          extra2: "extra2",
          extra3: "extra3",
          extra4: "extra4",
          extra5: "extra5",
          extra6: "extra6",
          extra7: "extra7",
          extra8: "extra8",
          extra9: "extra9",
          confirmation:
            "https://epaycocom.000webhostapp.com/confirmation/mix.php",
          response: "https://epaycocom.000webhostapp.com/confirmation/mix.php",
          name_billing: "Juan Diego Vargas Posada",
          address_billing: "Carrera 48 # 20 - 114 Oficina 655",
          type_doc_billing: "cc",
          mobilephone_billing: "3005936335",
          number_doc_billing: "123456789",
          email_billing: "info@epayco.com",
        };
        handler.open(data);
    };
  return (
    <Fragment>
      <input type="submit" placeholder="pagar" onClick={openchekout} />
    </Fragment>
  );
}
