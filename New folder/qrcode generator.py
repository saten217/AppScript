import qrcode
qrscan = qrcode.make("https://tiny.one/Sateeshloftform")
qrscan.save("QRforfillform.jpg")
