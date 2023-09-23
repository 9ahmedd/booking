import React, { useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import {useNavigate} from 'react-router-dom'

function Header({ type }) {
    const [destination, setDestination] = useState("");
    const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);
    const [openOption, setOpenOption] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room:1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,[name]:operation === "i" ?options[name] +1 :options[name] -1
            
            } })
    }

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels",{state:{destination,date,options}})
    }
  return (
      <div className='header'>
          <div className={type === "list"?"headerContainer listMode":"headerContainer"}>
          <div className="headerList">
              <div className="headerListItem active">
                  <i class="fa-solid fa-bed"></i>
                  <span>Stays</span>
              </div>
              <div className="headerListItem">
                  <i class="fa-solid fa-jet-fighter"></i>
                  <span>Flights</span>
              </div>
              <div className="headerListItem">
                  <i class="fa-solid fa-car-rear"></i>
                  <span>Car rentals</span>
              </div>
              <div className="headerListItem">
                  <i class="fa-solid fa-bed"></i>
                  <span>Attractions</span>
              </div>
              <div className="headerListItem">
                 <i class="fa-solid fa-taxi"></i>
                  <span>Airport taxis</span>
              </div>
              </div>
              {type !== 'list'&&
                  <>
                  <h1 className="headerTitle">
                  A lifetime of discounts? It's Genius.
              </h1>
                  <p className="headerDesc">
                      Get rewarded for your travels – unlock instant savings of 10% or
                      more with a free Lamabooking account
                  </p>
                  <button className="headerBtn">Sign in / Register</button>
                  <div className="headerSearch">
                      <div className="headerSearchItem">
                          <i class="fa-solid fa-bed headerIcon"></i>
                          <input type="text"
                              placeholder='Where are you going?'
                              className="headerSearchInput" onChange={(e)=>setDestination(e.target.value)} />
                      </div>
                      <div className="headerSearchItem">
                          <i class="fa-solid fa-calendar-days headerIcon"></i>
                          <span onClick={() => setOpenDate(!openDate)}
                              className="headerSearchText">
                              {`${format(date[0].startDate, "MM/dd/yyyy")}
                       to
                       ${format(date[0].endDate, "MM/dd/yyyy")} `}
                          </span>
                          {openDate && <DateRange
                              editableDateInputs={true}
                              onChange={item => setDate([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={date}
                              className='date'
                                 minDate={new Date()}
                          />}
                      </div>
                      <div className="headerSearchItem">
                          <i class="fa-solid fa-person headerIcon "></i>
                          <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`
                      ${options.adult} adult
                       . ${options.children} children
                        . ${options.room} room`}</span>
                          {openOption && <div className="options">
                              <div className="optionItem">
                                  <span className="optionText">Adult</span>
                                  <div className="optionCounter">
                                      <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                      <span className="optionCounterNumber">{options.adult}</span>
                                      <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                  </div>
                              </div>
                              <div className="optionItem">
                                  <span className="optionText">Children</span>
                                  <div className="optionCounter">
                                      <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                      <span className="optionCounterNumber">{options.children}</span>
                                      <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                  </div>
                              </div>
                              <div className="optionItem">
                                  <span className="optionText">Room</span>
                                  <div className="optionCounter">
                                      <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                      <span className="optionCounterNumber">{options.room}</span>
                                      <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                  </div>
                              </div>
                          </div>}
                      </div>
                      <div className="headerSearchItem">
                          <button className="headerBtn" onClick={()=>handleSearch()}>Search</button>
                      </div>
                  </div>
                  </>
                  }
          </div>
    </div>
  )
}

export default Header