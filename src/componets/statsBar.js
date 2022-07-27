import React, { useState } from "react";


const StatsBar = () => {

    const [statsData, setStatsData] =useState({
        attackDamage:'80',
        abilityPower:'0',
        armor:'100',
        magicResist:'140',
        attackSpeed:'1.23',
        abilityHaste:'45',
        criticalChance:'0%',
        moveSpeed:'350'
    })
    return (
        
            <div className="statsBox col-2 row">
                <div className="row">
                    <p className="stats attackDamage col-4">
                        AD:{statsData.attackDamage}
                    </p>
                    <p className="stats abilityPower col-4">
                        AP:{statsData.abilityPower}
                    </p>
                </div>
                <div className="row">
                    <p className="stats armor col-4">
                        AM:{statsData.armor}
                    </p>
                    <p className="stats magicResist col-4">
                        MR:{statsData.magicResist}
                    </p>
                </div>
                <div className="row">
                    <p className="stats attackSpeed col-4">
                        AS:{statsData.attackSpeed}
                    </p>
                    <p className="stats abilityHaste col-4">
                        AH:{statsData.abilityHaste}
                    </p>
                </div>
                <div className="row">
                    <p className="stats criticalChance col-4">
                        CC:{statsData.criticalChance}
                    </p>
                    <p className="stats moveSpeed col-4">
                        MS:{statsData.moveSpeed}
                    </p>
                </div>
            </div>
    )
}
export default StatsBar