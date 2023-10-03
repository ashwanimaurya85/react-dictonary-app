import React ,{useState} from "react";
import { fetchWordDetails } from '../services/dictionaryService';
import { useDispatch } from 'react-redux';
import { searchWord, addToHistory } from '../redux/actions/searchAction';
// import axios from 'axios';
import Loader from "./Loader";


const MainPage=()=>{
    const [searchVal,setSearchVal]=useState('');
    const [wordDetails, setWordDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch=useDispatch();
    

    function fetchFn(){
        setWordDetails(null);

        if(searchVal.trim() === '') {
        return;
        }

        setIsLoading(true);

        // Dispatch the searchWord action with the search term
        dispatch(searchWord(searchVal));

        // let url='https://api.dictionaryapi.dev/api/v2/entries/en/'+searchVal;

        fetchWordDetails(searchVal)
        .then((data) => {
            // Assuming the first result is relevant
            console.log(data);
            setWordDetails(data[0]);
            setIsLoading(false);

            // Add the searched word to the history
            dispatch(addToHistory(searchVal));
        })
        .catch((error) => {
            console.error('Error fetching word details:', error);
            setIsLoading(false);
        });
            
    }
    return(
        <div className="MainPage">
            <div className="flex justify-center">
                <div className="flex w-full m-3 border-2 rounded-sm border-neutral-950 sm:w-1/4">
                    <input type="text" placeholder="Enter your word" className="w-full px-2 text-lg outline-none sm:text-xl" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} />
                    <button type="submit" className="p-2 text-white bg-black text" onClick={fetchFn}>Search</button>
                </div>    
            </div>    
            {/* <WordMeaning data={data}/>   */}
            
            {isLoading && <Loader />}

            {wordDetails && (
                <div className="flex flex-col gap-4 p-4 m-5 rounded details bg-slate-300">
                    <h2 className="text-2xl font-bold underline uppercase">{wordDetails.word}</h2>
                    {wordDetails.phonetics.map((phonetic, index) => (
                        <div key={index}>
                            <p>{phonetic.text}</p>
                            {phonetic.audio && <audio src={phonetic.audio} controls />}
                        </div>
                    ))}
                    
                    {wordDetails.meanings.map((meaning, index) => (
                        <div key={index}>
                        <h2 className="text-xl font-bold underline">{meaning.partOfSpeech}</h2>
                        
                            {meaning.definitions.map((definition, defIndex) => (
                            <p key={defIndex}>
                                <p>{definition.definition}</p>
                                {definition.example && <p>{definition.example}</p>}
                            </p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default MainPage;