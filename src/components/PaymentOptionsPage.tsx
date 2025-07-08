import React from 'react';
import { Phone, Smartphone, QrCode, IndianRupee } from 'lucide-react';

const upiId = '9121838383@ybl';
const whatsappNumber = '+91 9121 838383';
const supportNumber = '+91 9121 838383';
const address = `KPHB 7th Phase\nNear Ankura Hospital\nKukatpally - Hyderabad\nIndia - 500082`;
const email = 'eatkrishna@gmail.com';
const sampleQR = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=9121838383@ybl&pn=EatKrishna';

const paymentOptions = [
  {
    icon: <Phone className="h-8 w-8 text-orange-600 mb-2" />,
    title: '1. Call & Order (Offline Support)',
    content: (
      <>
        <p className="mb-2">Prefer to talk to us directly? We've got you!</p>
        <ul className="list-disc list-inside text-sm mb-2 text-gray-700">
          <li>Call our EatKrishna support team: <span className="font-semibold text-orange-700">{supportNumber}</span></li>
          <li>Share your delivery address and laddu quantity over call or WhatsApp.</li>
          <li>Our team will guide you on how to proceed with payment or Cash on Delivery.</li>
        </ul>
        <div className="text-xs text-gray-500 whitespace-pre-line">📱 Phone/WhatsApp: <span className="font-semibold">{supportNumber}</span>\n🏠 Address: {address}\n✉️ Email: {email}</div>
      </>
    ),
  },
  {
    icon: <Smartphone className="h-8 w-8 text-orange-600 mb-2" />,
    title: '2. Pay via UPI ID',
    content: (
      <>
        <p className="mb-2">Want to pay digitally but keep it simple?</p>
        <ol className="list-decimal list-inside text-sm mb-2 text-gray-700">
          <li>Open any UPI-enabled app (PhonePe, Google Pay, Paytm, etc.).</li>
          <li>Enter our EatKrishna UPI ID: <span className="font-semibold text-orange-700">{upiId}</span></li>
          <li>Enter the total amount and pay.</li>
          <li>Take a screenshot of the successful payment.</li>
          <li>Send the screenshot to our WhatsApp: <span className="font-semibold text-green-700">{whatsappNumber}</span></li>
          <li>Our team will verify and confirm your order with a message.</li>
        </ol>
        <div className="text-xs text-gray-500">⚠️ Please ensure the screenshot includes Transaction ID and Amount.</div>
      </>
    ),
  },
  {
    icon: <QrCode className="h-8 w-8 text-orange-600 mb-2" />,
    title: '3. Scan & Pay with QR Code',
    content: (
      <>
        <p className="mb-2">Make your payment effortlessly by scanning our QR Code:</p>
        <div className="flex flex-col items-center mb-2">
          <img src={sampleQR} alt="UPI QR Code" className="w-32 h-32 rounded shadow mb-2" />
          <span className="text-xs text-gray-500">Scan this QR code with your UPI app to pay EatKrishna directly.</span>
        </div>
        <ol className="list-decimal list-inside text-sm mb-2 text-gray-700">
          <li>Open your UPI app and scan the QR Code above.</li>
          <li>Confirm the amount and complete the payment.</li>
          <li>Take a screenshot of the payment confirmation screen.</li>
          <li>Share it on WhatsApp: <span className="font-semibold text-green-700">{whatsappNumber}</span></li>
          <li>We'll verify and send your order confirmation.</li>
        </ol>
        <div className="text-xs text-green-700 font-semibold">✅ Fast. Secure. Trusted.</div>
      </>
    ),
  },
  {
    icon: <IndianRupee className="h-8 w-8 text-orange-600 mb-2" />,
    title: '4. Cash on Delivery (COD)',
    content: (
      <>
        <p className="mb-2 font-semibold text-orange-700">Pay only when your order arrives at your doorstep!</p>
        <ul className="list-disc list-inside text-sm mb-2 text-gray-700">
          <li>Place your order via call or WhatsApp, and choose <span className="font-semibold">Cash on Delivery</span>.</li>
          <li>Our team will confirm your address and COD eligibility for your pin code.</li>
          <li>On delivery day, our executive will call you before arrival.</li>
          <li>Pay the <span className="font-semibold">exact amount in cash</span> to our delivery executive when you receive your laddus.</li>
          <li>Check your order before payment for complete satisfaction.</li>
        </ul>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-2 text-xs text-gray-700 flex items-center gap-2">
          <span className="text-orange-600 font-bold">🚚</span>
          <span>COD is available for select locations in Hyderabad. Our team will confirm availability after you place your order.</span>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-xs text-green-700 flex items-center gap-2">
          <span className="text-green-600 font-bold">👍</span>
          <span>Safe, convenient, and no advance payment needed. Shop with confidence!</span>
        </div>
      </>
    ),
  },
];

const PaymentOptionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-700">Choose Your Payment Method</h2>
      <p className="text-center text-orange-600 text-base font-medium mb-8">To place your order, please follow one of the payment methods below.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {paymentOptions.map((opt, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
          >
            {opt.icon}
            <div className="font-semibold text-lg text-orange-700 mb-2 text-center">{opt.title}</div>
            <div className="text-gray-700 text-sm text-left w-full max-w-xs mx-auto">{opt.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptionsPage; 