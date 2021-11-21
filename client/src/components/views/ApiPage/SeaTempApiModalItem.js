import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  background-color: white;
  margin-left: 100px;
`;

const SeaTempApiModalItem = () => {
  const [tempData, setTempData] = useState({});

  // useEffect를 쓴 이유 : fetch함수를 통해 API를 계속 불러오는 것을 방지하여 속도 향상, useState 값이 변경되면 업데이트 해주기 위해.
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://postman-open-technologies.github.io/environment/apis/global-surface-temperatures/"
      );
      makeData(res.data);
    };
    const makeData = (items) => {
      // 매일이 아닌 달마다로 보여주기 위한 로직(이를 위해 reduce를 써준 것)
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const monthly = cur.Monthly;
        const findItem = acc.find((a) => a.year === year);
        if (!findItem) {
          acc.push({
            year,
            monthly,
          });
        }
        if (findItem) {
          findItem.monthly = monthly;
          findItem.year = year;
        }
        console.log(year);
        return acc;
      }, []);
      console.log(arr);

      const labels = arr?.map((a) => `${a.year + 1}년`);
      setTempData({
        labels,
        datasets: [
          {
            label: "기온(섭씨)",
            borderColor: "salmon",
            fill: false,
            data: arr?.map((a) => a.monthly),
          },
        ],
      });
    };
    fetchEvents();
  }, []);

  return (
    <Section>
      <h2>해수면 온도 변화</h2>
      <div className="contents" style={{ width: "700px" }}>
        <div style={{ width: "700px" }}>
          <Line
            style={{
              width: "700px",
              height: "300px",
            }}
            data={tempData}
            options={
              ({
                title: {
                  display: true,
                  text: "기온 변화를 확인해보자.",
                  fontSize: 16,
                },
              },
                { legend: { display: true, position: "bottom" } })
            }
          />
        </div>
      </div>
    </Section>
  );
};

export default SeaTempApiModalItem;
