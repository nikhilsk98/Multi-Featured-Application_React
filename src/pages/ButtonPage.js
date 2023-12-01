import Button from "../components/Button";
import { GoBellFill, GoAlert, GoBeaker } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoAlert />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBeaker />
          Something
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Lets go
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Dance
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
