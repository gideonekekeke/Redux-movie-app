import { Button } from "antd";
import { usePaystackPayment } from "react-paystack";

function Payment({ r }) {
  console.log("This is the Total cost", r);
  const t = parseInt(Math.ceil(r));
  console.log("t: ", t);
  const config = {
    reference: new Date().getTime(),
    email: "user@example.com",
    amount: t * 100,
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <Button
        type="primary"
        danger
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Pay to Watch
      </Button>
      <div>{r.totalCost}</div>
    </div>
  );
}

export default Payment;
