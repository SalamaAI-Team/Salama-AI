import { ChatWindow } from "@/components/ChatWindow";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  
  const InfoCard = (
    
    <div className="p-4 md:p-8 rounded bg-blue-500 dark:bg-boxdark-2 dark:text-bodydark1 w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4  text-bodydark1">
        Non Communicable Diseases NCD Helper 🏥
      </h1>
      <ul>
        <li className="text-2xl">
          📃
          <span className="ml-2  text-bodydark1">
            Welcome to our AI assistant to help you with NCDs try some of the prompts below to get you started {" "}
            {" "}
            
          </span>
        </li>
        <li className="hidden text-l md:block  text-bodydark1">
          
          <span className="ml-2">
            {" "}            
          </span>
        </li>
        <li>
          
          <span className="ml-2  text-bodydark1">
          What are non-communicable diseases?
          </span>
        </li>
        <li className="hidden text-l md:block  text-bodydark1">
          
          <span className="ml-2">
          How can I prevent heart disease?.
          </span>
        </li>
        <li className="text-l  text-bodydark1">
          
          <span className="ml-2">
          What are the risk factors for diabetes?            
          </span>
        </li>
        <li className="text-l  text-bodydark1">
          
          <span className="ml-2">
          Can lifestyle changes reduce cancer risk?
          </span>
        </li>
      </ul>
    </div>
   // </DefaultLayout>
    
  );
  return (
    <DefaultLayout >    
    <ChatWindow       
      endpoint="api/chat"
      emoji="👨‍⚕️"
      titleText="Doctor Salama"
      placeholder="I am a  None Communicable Diseases expert"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
    
    </DefaultLayout>
  );
  
}
