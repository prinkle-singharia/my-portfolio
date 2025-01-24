const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/leetcode/contributions", async (req, res) => {
  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query: `
          query {
            matchedUser(username: "prinkle14") {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    const calendarData = JSON.parse(response.data.data.matchedUser.userCalendar.submissionCalendar);
    res.json(calendarData);
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));