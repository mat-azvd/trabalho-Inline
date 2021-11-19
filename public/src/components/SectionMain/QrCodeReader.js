import React, { useRef } from "react";
import QrReader from "react-qr-reader";

const QrCodeReader = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const qrRef = useRef(null);

    const handleError = (error) => {
        console.log(error);
    };

    const handleScan = (result) => {
        if (result) {
            props.onSubmit(result);
        }
    };

    return (
        <div>
            <QrReader
                ref={qrRef}
                id="qrcode"
                delay={300}
                style={{ width: "300px" }}
                onError={handleError}
                onScan={handleScan}
            />
        </div>
    );
};

export default QrCodeReader;
