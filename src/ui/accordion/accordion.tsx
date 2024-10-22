import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDown from "/src/assets/icons/arrow-down.svg";

export const AccordionSeason = () => (
      <Accordion
        style={{
          backgroundColor: "transparent",
          borderRadius: "0",
          boxShadow: '0px -1px 0px var(--primary), 0px 1px 0px var(--primary)', 
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            margin: 0,
            padding: "0 15px 0 0",
          }}
        >
          <Typography
            style={{
              margin: "6px 0",
              padding: 0,
              color: "var(--primary)",
              fontWeight: "700",
              fontSize: "24px",
              fontFamily: "Raleway",
            }}
          >
            Турция
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
