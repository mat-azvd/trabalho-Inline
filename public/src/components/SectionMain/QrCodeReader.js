import React, { useRef, useState } from "react";
import QrReader from "react-qr-reader";

const QrCodeReader = ({ textQrCode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const qrRef = useRef(null);

    const [scanResult, setScanResult] = useState("");

    const handleError = (error) => {
        console.log(error);
    };

    const handleScan = (result) => {
        if (result) {
            setScanResult(result);
            window.open(result, "_blank");
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
