import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);
  return (
    <div>
      <h1>Buttons</h1>
      Primary large
      <Button color="primary" size="large">
        Click
      </Button>
      <br />
      Primary disabled
      <Button color="primary" disabled>
        Click
      </Button>
      <br />
      Primary medium
      <Button color="primary" size="medium">
        Click
      </Button>
      <br />
      Primary small
      <Button color="primary" size="small">
        Click
      </Button>
      <br />
      Secondary large
      <Button color="secondary" size="large">
        Click
      </Button>
      <br />
      Secondary disabled
      <Button color="secondary" disabled>
        Click
      </Button>
      <br />
      Secondary medium
      <Button color="secondary" size="medium">
        Click
      </Button>
      <br />
      Secondary small
      <Button color="secondary" size="small">
        Click
      </Button>
      <br />
      <h1>Alerts</h1>
      <button className="button" onClick={handleOpen}>
        Open alert
      </button>
      {isOpenAlert && (
        <Alert color="primary" onClose={handleClose}>
          Join Tripma today and save up to 20% on your flight using code TRAVEL
          at checkout. Promotion valid for new users only.
        </Alert>
      )}
      {isOpenAlert && (
        <Alert color="error" onClose={handleClose}>
          Trimpa is currently experiencing an outage. We appreciate your
          patience. Stay up to date at status.tripma.com.
        </Alert>
      )}
      {isOpenAlert && (
        <Alert color="warning" onClose={handleClose}>
          Tripma will be undergoing routine maintenance in 30 minutes. We expect
          this to take no longer than 15 minutes. Stay up to date at
          status.tripma.com.
        </Alert>
      )}
    </div>
  );
}

export default App;
