import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {Cookies} from 'js-cookie';

const MyLink = ({ href }) => {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const visitedLinks = Cookies.getJSON('visitedLinks') || {};
    if (visitedLinks[href]) {
      setVisited(true);
    }
  }, [href]);

  useEffect(() => {
    if (visited) {
      const visitedLinks = Cookies.getJSON('visitedLinks') || {};
      visitedLinks[href] = true;
      Cookies.set('visitedLinks', visitedLinks);
    }
  }, [visited, href]);

  return (
    <Link href={href}>
        {visited && <div className="tick-icon">✓</div>}
    </Link>
  );
};

export default MyLink;
