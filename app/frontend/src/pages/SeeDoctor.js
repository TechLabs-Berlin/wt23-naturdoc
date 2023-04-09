// motion
import { motion } from "framer-motion";
import { remedyTransition } from "assets/animations";
// components
import LayoutHOC from "components/layouts/LayoutHOC"
import Hero from "components/layouts/Hero"
// material-ui & assets
import { Box, Card, Divider, Typography, Link } from "@mui/material";
import call116117 from "assets/call116117.png";


const doctorFAQ = [
    {
        question: "Do I sense that something is urgently wrong?",
        answer: "Start here. Trust your instincts and see a doctor if you sense that you need immediate medical attention. Always check out chest pains, loss of consciousness, or new severe physical pain.",
    },
    {
        question: "What are my symptoms? Have I had them before? If so, how did they get resolved?",
        answer: "Would the same approach work now or is there something different about the symptoms this time?",
    },
    {
        question: "How long have the symptoms been going on? Are they getting better or worse?",
        answer: "Generally any symptoms that are not improving after one to two weeks are worth pursuing with a healthcare provider. Pay attention to symptoms that are getting worse (and consider the first question).",
    },
    {
        question: "Can I get more information from a book or reputable website to answer my specific questions?",
        answer: "",
    },
    {   
        question: "What do I really think would be best for my health (ignoring any worries that I will be a bother if I go to the doctor, or that it will cost too much)?",
        answer:"",
    },
]


const SeeDoctor = () => {

  return (
      <motion.div
          initial="in"
          animate="animate"
          exit="out"
          variants={remedyTransition}
      >
          <Hero
              title="Naturdoc"
              mtTitle={{ mt: 6 }}
              subtitle="Here are some questions to help you figure out, if you should go see a doctor"
              subtitleColor="text.primary"
          />
          <Divider />

          {doctorFAQ.map((item) => {
              const id = item.question;
              return (
                  <Box key={id} xs={12} sm={12} md={12} sx={{ p: 1 }}>
                      <Typography component="h2" sx={{ fontWeight: 500 }}>
                          {item.question}
                      </Typography>
                      <Typography sx={{ mb: 2 }}>{item.answer}</Typography>
                  </Box>
              );
          })}

          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
              <img src={call116117} alt="116117" width="150" />
          </Box>

          <Card sx={{ m: 1 }} variant="resultCard">
              <Typography
                  sx={{
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      mx: 3,
                      mt: 3,
                      mb: 2,
                  }}
              >
                  With the call number you can reach the patient service with
                  the medical on-call service around the clock - 24 hours a day,
                  7 days a week. This service is only available in German.
              </Typography>
              <Typography
                  sx={{ fontWeight: 500, fontSize: '0.9rem', mx: 3, mb: 3 }}
              >
                  Find more information about the service here:{' '}
                  <Link href="https://116117.de" target="_blank">
                      116117.de
                  </Link>
              </Typography>
          </Card>
      </motion.div>
  );
}

export default LayoutHOC(SeeDoctor)