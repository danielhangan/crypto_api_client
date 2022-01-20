import React from 'react';
import {useRouter} from "next/router";

export default function Dashboard () {
  const { query } = useRouter();

  return (
      <div>
          dashboard
      </div>
  )
};
