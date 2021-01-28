import React from 'react';

export interface CardTestProps {
  data: {id: number, tileImage: string, viewReport: string, tileRouter: string }[],
}

export const CardTest: React.FC<CardTestProps> = ({
  data, 
}) => {
  return (
    <div className="tileBox">
				<ul className="tileTable">
						{data.map((item) => {
							return (
								// <Link key={index} to={item.tileRouter}>
									<li key={item.id} className="homeTileCell" id="homeTileCell_pageName">
										<div className="homeTileHeader">
											<p className="homeTileTitle"></p>
											<p className="homeTileImage">
												<img src={item.tileImage} alt="" />
											</p>
											<p className="homeTileDescription"></p>
										</div>
										<p className="homeTileViewReport">{item.viewReport}</p>
									</li>
								// </Link>
							);
						})}
				</ul>
    </div>
  )
}