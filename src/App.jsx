import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        variant="btn--primary"
        size="small"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>

      <Button
        variant="btn--primary"
        size="medium"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>
      <Button
        variant="btn--primary"
        type="button"
        onClick={() => console.log("Clicked")}
        size="large"
      >
        Primary
      </Button>
      <Button
        variant="btn--primary--outline"
        size="small"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary Outline
      </Button>
      <Button
        variant="btn--primary--outline"
        size="medium"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary Outline
      </Button>
      <Button
        variant="btn--primary--outline"
        size="large"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary Outline
      </Button>

      <Button
        variant="btn--secondary"
        size="small"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--secondary"
        size="medium"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--secondary"
        size="large"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="small"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary Outline
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="medium"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary Outline
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="large"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary Outline
      </Button>
      <Button
        variant="btn--primary"
        size="small"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>
      <Button
        variant="btn--primary--outline"
        size="medium"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>
      <Button
        variant="btn--secondary"
        size="small"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--secondary"
        size="medium"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="medium"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--primary"
        size="fullWidth"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>
      <Button
        variant="btn--secondary"
        size="fullWidth"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--primary--outline"
        size="fullWidth"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Primary Outline
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="fullWidth"
        type="button"
        radius="radius"
        onClick={() => console.log("Clicked")}
      >
        Secondary Outline
      </Button>
      <Button
        variant="btn--primary"
        size="fullWidth"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary
      </Button>
      <Button
        variant="btn--secondary"
        size="fullWidth"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary
      </Button>
      <Button
        variant="btn--primary--outline"
        size="fullWidth"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Primary Outline
      </Button>
      <Button
        variant="btn--secondary--outline"
        size="fullWidth"
        type="button"
        onClick={() => console.log("Clicked")}
      >
        Secondary Outline
      </Button>
    </div>
  );
}

export default App;
