'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function ModuleMarksPage() {
  const router = useRouter();
  
  const handleLogout = () => {
    // Remove both cookie and localStorage for complete logout
    Cookies.remove('isAuthenticated');
    localStorage.removeItem('isAuthenticated');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white p-3 flex items-center space-x-4">
        <div className="flex items-center">
          <img src="https://sits.surrey.ac.uk/live/sits.urd/images/sv-header.png" alt="Surrey Logo" className="h-8 mr-2" />
          <span className="text-sm font-bold">SURREY SELF-SERVICE</span>
        </div>
        <div className="ml-6 flex items-center space-x-6 text-sm">
          <a href="#" className="px-2">Welcome</a>
          <a href="#" className="px-2">Applications</a>
          <a href="#" className="px-2">Registration</a>
          <a href="#" className="px-2">Extenuating Circumstances</a>
          <a href="#" className="px-2">Letters</a>
          <a href="#" className="px-2 font-bold">Modules</a>
          <button className="px-2">+</button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow p-4 max-w-7xl mx-auto w-full">
        <h2 className="text-lg font-semibold mb-4 pl-2">My Modules</h2>
        
        {/* Progression Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Progression</div>
          <div className="p-3 flex">
            <div className="w-1/2">
              <p className="text-xs mb-2">Your progression status describes your current progression outcome from your recent assessments.</p>
              <p className="text-xs mb-2">Further explanations on your progression status can be found <a href="#" className="text-blue-600">here</a>.</p>
            </div>
            <div className="w-1/2 bg-gray-100 p-3">
              <div className="text-sm font-semibold mb-2">Progression status</div>
              <p className="text-xs mb-2">You have approved Extenuating Circumstances for 60 credits or less, and will need to take these in the Late Summer Assessment period.</p>
              <p className="text-xs">Please refer to the FAQ section for further information.</p>
            </div>
          </div>
        </div>
        
        {/* Module and assessment marks Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Module and assessment marks</div>
          <div className="p-3 flex">
            <div className="w-1/2">
              <p className="text-xs mb-1">The weighted averages of your agreed marks at each level are shown here. The level average is correct when all of your marks have been entered and agreed by the Board of Examiners at the end of each level of study.</p>
            </div>
            <div className="w-1/2 bg-gray-100 p-3">
              <div className="text-sm font-semibold mb-2">Level averages</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-1 border text-left">Level</th>
                      <th className="p-1 border text-left">Credits Attempted</th>
                      <th className="p-1 border text-left">Credits Awarded</th>
                      <th className="p-1 border text-left">Compensation</th>
                      <th className="p-1 border text-left">RPL</th>
                      <th className="p-1 border text-left">Total</th>
                      <th className="p-1 border text-left">Overall Aggregate Mark</th>
                      <th className="p-1 border text-left">BoE Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 border">HE7</td>
                      <td className="p-1 border">180</td>
                      <td className="p-1 border">15</td>
                      <td className="p-1 border"></td>
                      <td className="p-1 border"></td>
                      <td className="p-1 border">15</td>
                      <td className="p-1 border">74.5</td>
                      <td className="p-1 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs mb-2">Please note that this is not an official transcript and it is possible your final marks will differ from those displayed here available. Marks are provisional and subject to validation by University examination boards.</p>
          </div>
        </div>
        
        {/* Provisional marks Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Provisional marks</div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-1 border text-left">Year</th>
                    <th className="p-1 border text-left">Module code</th>
                    <th className="p-1 border text-left">Module title</th>
                    <th className="p-1 border text-left">Provisional mark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 border" colSpan={4}>Level 3 (Masters)</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3032</td>
                    <td className="p-1 border">Computer Vision And Pattern Recognition</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Coursework Assignment</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">2 Hr Integrated (Open Book) Examination</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  
                  {/* Additional module entries would go here */}
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3064</td>
                    <td className="p-1 border">60 Credit Standard Project</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Project Report And Technical Analysis</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Presentation And Technical Achievement</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3030</td>
                    <td className="p-1 border">Speech & Audio Processing & Recognition</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Coursework 1 - Speech Processing</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Coursework 2 - Speech Recognition</td>
                    <td className="p-1 border">76</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">2HR Integrated Close Book Exam</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3066</td>
                    <td className="p-1 border">Fundamentals Of Machine Learning</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Coursework</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">2 Hr Integrated (Open Book) Examination</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3068</td>
                    <td className="p-1 border">Applied Machine Learning</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Course Project Report</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Demonstration And Oral Presentation</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3069</td>
                    <td className="p-1 border">AI And Health</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Coursework</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Lab Report</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">2 Hr Integrated (Open Book) Examination</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3072</td>
                    <td className="p-1 border">Research, Professionalism And Innovation</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Group Design Project</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Multiple Choice Questions Examination (2 Hrs)</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3073</td>
                    <td className="p-1 border">AI And Sustainability</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border">Individual Coursework</td>
                    <td className="p-1 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2">
              <p className="text-xs">These marks are the most up to date, but please note this is not a transcript and so is not an official confirmation of module marks.</p>
            </div>
            
            <div className="mt-4">
              <table className="w-full text-xs border">
                <tbody>
                  <tr className="bg-gray-200">
                    <th className="p-1 border text-left">Grade</th>
                    <th className="p-1 border text-left">Meaning</th>
                  </tr>
                  <tr>
                    <td className="p-1 border">AP</td>
                    <td className="p-1 border">Attempt coded due to uplift appeal</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">F</td>
                    <td className="p-1 border">Fail</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">EM</td>
                    <td className="p-1 border">Extenuating Circumstances approved</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">FP</td>
                    <td className="p-1 border">Misconduct uplift - 1st offence penalty</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">FQ</td>
                    <td className="p-1 border">Fail - qualified (assessment level pass mark not achieved)</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">MP</td>
                    <td className="p-1 border">Misconduct uplift - 2nd offence penalty</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">MS</td>
                    <td className="p-1 border">Holding grade - Misconduct uplift</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">NC</td>
                    <td className="p-1 border">Fail - not compensatable as an assessment has not been submitted</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">NS</td>
                    <td className="p-1 border">Not submitted</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">P</td>
                    <td className="p-1 border">Pass</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">PC</td>
                    <td className="p-1 border">Pass with compensation</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">RS</td>
                    <td className="p-1 border">Nursing students only: refer signature</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">S</td>
                    <td className="p-1 border">Fail (assessment submitted)</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">XT</td>
                    <td className="p-1 border">Administrative grade to increment attempts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Ratified marks Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Ratified marks</div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-1 border text-left">Year</th>
                    <th className="p-1 border text-left">Module code</th>
                    <th className="p-1 border text-left">Module title</th>
                    <th className="p-1 border text-left">Credits attempted</th>
                    <th className="p-1 border text-left">Mark</th>
                    <th className="p-1 border text-left">Grade</th>
                    <th className="p-1 border text-left">Credits achieved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 border" colSpan={7}>Level M (Masters)</td>
                  </tr>
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3030</td>
                    <td className="p-1 border">Speech & Audio Processing & Recognition</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">11</td>
                    <td className="p-1 border">Fail (Mitigating)</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">10% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">76</td>
                    <td className="p-1 border">15% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  {/* Additional ratified marks entries */}
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">15% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">70% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">EEE3066</td>
                    <td className="p-1 border">Fundamentals Of Machine Learning</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">Fail (Mitigating)</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">MAN3010</td>
                    <td className="p-1 border">Topics In Middle Eastern AI</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">67</td>
                    <td className="p-1 border">Pass</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">68</td>
                    <td className="p-1 border">40% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">66</td>
                    <td className="p-1 border">60% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border">2024/25</td>
                    <td className="p-1 border">EEE3032</td>
                    <td className="p-1 border">Computer Vision And Pattern Recognition</td>
                    <td className="p-1 border">15</td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">Fail (Mitigating)</td>
                    <td className="p-1 border">0</td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">1st Attempt</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">0</td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">20% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                  <tr>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">Reassessment</td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border"></td>
                    <td className="p-1 border">80% weighting</td>
                    <td className="p-1 border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="bg-white border mb-4">
          <div className="bg-gray-200 px-3 py-2 text-sm font-semibold">Awards</div>
          <div className="p-3">
            <p className="text-xs">Any conferred awards are shown here:</p>
            
            <div className="bg-gray-100 p-3 mt-2">
              <div className="text-sm font-semibold mb-2">Award and classification</div>
              <p className="text-xs">No Conferred award records to show</p>
            </div>
          </div>
        </div>
        
        {/* Back and Contact buttons */}
        <div className="flex justify-between mt-4">
          <button className="border bg-white text-gray-700 px-4 py-1 text-sm">Back</button>
          <button className="bg-blue-700 text-white px-4 py-1 text-sm" onClick={() => window.open('mailto:support@surrey.ac.uk')}>
            Contact faculty support
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 text-xs text-gray-600 py-2 px-4 border-t mt-auto text-right">
        Logged in as Melroy Menezes (6857373) |{" "}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
          className="text-blue-600"
        >
          Logout
        </a>
      </footer>
    </div>
  );
}