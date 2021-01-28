import React from 'react'
import styled from 'styled-components'
import { MyTheme } from '../../styles/myTheme'

export interface CardProps {
  data: { tileImage: string, viewReport: string, tileRouter: string }[],
}

const Wrapper = styled.div`
  width: 100%;
  ul.tileTable {
    background-color: ${MyTheme.background.light};
    display: grid;
    justify-items: center;
    justify-content: space-between;
    padding: 5px;
    grid-template-columns: 1fr;
    gap: 5px;
    
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      padding: 10px;
      gap: 10px;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 15px;
      gap: 15px;
    }
    @media (min-width: 1800px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 20px;
      gap: 20px;
    }
    
    .homeTileCell {
      width: 100%;
      height: 300px;
      /* margin: 30px 0; */
      border-radius: 3px;
      box-shadow: ${MyTheme.shadow.primary};
      background-color: ${MyTheme.color.brandPrimary};
      &:hover {
        box-shadow: ${MyTheme.shadow.secondary};
        cursor: pointer;
      }
      &:hover .homeTileViewReport {
        background-color: ${MyTheme.color.brandPrimary};
        color: ${MyTheme.color.lightest};
      }

      .homeTileHeader {
        position: relative;
        width: 100%;
        height: 236px;
        p {
          margin: 0;
          padding: 0;
        }
        .homeTileImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 236px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }
          &:hover img {
            transform: scale(1.3);
          }
        }
      }
      .homeTileViewReport {
        width: 100%;
        height: 64px;
        line-height: 64px;
        margin: auto;
        background-color: ${MyTheme.color.light};
        border-top: 1px solid ${MyTheme.color.border};
        border-radius: 0 0 3px 3px;
        opacity: 0.96;
        font-family: ${MyTheme.typography.type.primary};
        color: ${MyTheme.color.brandPrimary};
        text-align: center;
      }
    }
  }
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;

export const Card: React.FC<CardProps> = ({
  data, 
}) => {
  return (
    <Wrapper className="tileBox">
				<ul className="tileTable">
						{data.map((item, index) => {
							return (
								// <Link key={index} to={item.tileRouter}>
									<li className="homeTileCell" id="homeTileCell_pageName">
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
    </Wrapper>
  )
}



