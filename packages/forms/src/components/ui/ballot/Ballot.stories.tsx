import * as React from "react";
import { Ballot, BallotVariant } from "./Ballot";
import { Row } from "@stenajs-webui/core";
import { faShip } from "@fortawesome/free-solid-svg-icons/faShip";
import { Icon } from "@stenajs-webui/elements";
import { faChild } from "@fortawesome/free-solid-svg-icons/faChild";

export default {
  title: "forms/Ballot",
  component: Ballot,
};

const ballotVariants: BallotVariant[] = ["riksdag", "kommun", "landsting"];

export const Variants = () => (
  <Row gap={3}>
    {ballotVariants.map((variant) => (
      <Ballot
        categoryText={`Val till ${variant}`}
        variant={variant}
        icon={faShip}
        headerText={"Stenapartiet"}
        text={"You may check one of the following candidates if you want to."}
        candidates={[
          "Mattias, Cheese Master, Travel",
          "Johan, Transformation Lead, Freight",
          "Niklas, Hackerman, Freight",
          "Josefina, Design Infiltrator, Freight",
        ]}
        onVote={(candidate) =>
          alert(`You voted${candidate ? ` for ${candidate}` : ""}`)
        }
      />
    ))}
  </Row>
);

export const Loading = () => (
  <Row gap={3}>
    <Ballot
      categoryText={"Val till riksdagen"}
      headerText={"Stenapartiet"}
      text={"You may check one of the following candidates if you want to."}
      candidates={[
        "Mattias, Cheese Master, Travel",
        "Johan, Transformation Lead, Freight",
        "Niklas, Hackerman, Freight",
        "Josefina, Design Infiltrator, Freight",
      ]}
      onVote={(candidate) =>
        alert(`You voted${candidate ? ` for ${candidate}` : ""}`)
      }
      loading
    />
  </Row>
);

export const Disabled = () => (
  <Row gap={3}>
    <Ballot
      categoryText={"Val till riksdagen"}
      headerText={"Stenapartiet"}
      text={"You may check one of the following candidates if you want to."}
      candidates={[
        "Mattias, Cheese Master, Travel",
        "Johan, Transformation Lead, Freight",
        "Niklas, Hackerman, Freight",
        "Josefina, Design Infiltrator, Freight",
      ]}
      onVote={(candidate) =>
        alert(`You voted${candidate ? ` for ${candidate}` : ""}`)
      }
      disabled
    />
  </Row>
);

export const NoCandidates = () => (
  <Row gap={3}>
    <Ballot
      categoryText={"Val till riksdagen"}
      headerText={"Stenapartiet"}
      onVote={() => alert("You voted")}
    />
  </Row>
);

export const WithIcon = () => (
  <Row gap={3}>
    <Ballot
      categoryText={"Val till riksdagen"}
      icon={faShip}
      headerText={"Stenapartiet"}
      onVote={() => alert("You voted")}
    />
  </Row>
);

export const WithChildren = () => (
  <Row gap={3}>
    <Ballot
      categoryText={"Val till riksdagen"}
      headerText={"Stenapartiet"}
      onVote={() => alert("You voted")}
    >
      <Row justifyContent={"center"} gap>
        <Icon icon={faChild} />
        <Icon icon={faChild} />
        <Icon icon={faChild} />
        <Icon icon={faChild} />
        <Icon icon={faChild} />
      </Row>
    </Ballot>
  </Row>
);
