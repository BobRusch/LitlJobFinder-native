import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from "./types";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERY_PARAMS = {
  publisher: `"4201738803816157"`,
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "react developer",
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  const url = buildJobsUrl("07444");
  console.log(url);
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(
      "http://api.indeed.com/ads/apisearch?publisher=4201738803816157%22&format=json&v=2&latlong=1&radius=10&q=react%20developer&l=07444"
    );
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error("indeed", e);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB,
  };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
};
