import axios from "axios";
import qs from "qs";

// export const handleTranslate = (source, target, text, setTextResult) => {
//   console.log("call");
//   const options = {
//     method: "POST",
//     url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "accept-encoding": "application/gzip",
//       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//       "x-rapidapi-key": "2612ce2750mshf37c5653b1b7806p11b0f9jsncf7d1fba4de1",
//     },
//     data: qs.stringify({ q: text, target, source }),
//   };
//   axios
//     .request(options)
//     .then(function (response) {
//       const textResponse = response.data.data.translations[0].translatedText;
//       setTextResult(textResponse);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

export const handleTranslate = (source, target, text, setTextResult) => {
  console.log({
    text,
    source,
    target,
  });
  const options = {
    method: "POST",
    url: "https://rimedia-translation.p.rapidapi.com/api_translate_limited.php",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-host": "rimedia-translation.p.rapidapi.com",
      "x-rapidapi-key": "2612ce2750mshf37c5653b1b7806p11b0f9jsncf7d1fba4de1",
    },
    data: qs.stringify({
      text,
      from: source,
      to: target,
      translate_capital: "true",
    }),
  };

  axios
    .request(options)
    .then(function (response) {
      const textResponse = response.data.result[target];
      setTextResult(textResponse);
    })
    .catch(function (error) {
      console.error(error);
    });
};
