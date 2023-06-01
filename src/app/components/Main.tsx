"use client"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

import { Button } from "@fluentui/react-components";

export default function Main() {
  return (
    <div>
      <FluentProvider theme={teamsLightTheme}>
        <h1>Team</h1>
        <Button appearance="primary">Get started</Button>;
      </FluentProvider>
    </div>
  );
}
