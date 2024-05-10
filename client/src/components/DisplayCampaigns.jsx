import React from 'react'
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import FundCard from './FundCard';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();
    return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>
    <FundCard/>
    </div>
  ) 
}

export default DisplayCampaigns
