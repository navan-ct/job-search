export type Job = {
  jdUid: string;
  jdLink: string;
  companyName: string;
  logoUrl: string;
  jobRole: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  minJdSalary: number | null;
  maxJdSalary: number | null;
  salaryCurrencyCode: string;
  jobDetailsFromCompany: string;
};

const fetchAll: () => Promise<{ jdList: Job[]; totalCount: number }> = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 9,
    offset: 0,
  });

  return fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
    method: "POST",
    headers,
    body,
  }).then((response) => response.json());
};

export const jobsApi = { fetchAll };
