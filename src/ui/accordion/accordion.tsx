import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FC, useState } from "react";
import ArrowDown from "/src/assets/icons/arrow-down.svg";
import { Country } from "../../pages/seasons/seasons-data";
import styles from "./accordion.module.css";

export const AccordionSeason: FC<{ countries: Country[] }> = ({ countries }) => {
  const [expanded, setExpanded] = useState<number[]>([0]);

  if (countries.length === 0) {
    return null;
  }

  const toggle = (index: number) => {
    setExpanded((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
  };

  return (
    <div className={styles.list}>
      {countries.map((country, index) => (
        <Accordion
          key={country.name}
          expanded={expanded.includes(index)}
          onChange={() => toggle(index)}
          TransitionProps={{ unmountOnExit: true }}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            margin: 0,
            borderTop: index === 0 ? "1px solid var(--primary)" : "none",
            borderBottom: "1px solid var(--primary)",
            borderLeft: "none",
            borderRight: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className={styles.button}>
                <ArrowDown />
              </span>
            }
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
            sx={{
              margin: 0,
              padding: "8px 0",
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <span className={styles.title}>{country.name}</span>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, paddingBottom: "56px" }}>
            {country.image && <img src={country.image} alt={country.name} className={styles.image} loading="lazy" />}
            {country.description.length > 0 && (
              <div className={styles.text}>
                {country.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

