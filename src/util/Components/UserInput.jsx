import { useState } from "react";

export default function UserInputs({ onChange,userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            type="number"
            required
            id=""
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            type="number"
            required
            id=""
          />{" "}
        </p>
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
            type="number"
            required
            id=""
          />{" "}
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
            type="number"
            required
            id=""
          />
        </p>
      </div>
    </section>
  );
}
