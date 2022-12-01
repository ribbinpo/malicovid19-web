import Image from "next/image";
import e1 from 'assets/experiments/1.png';
import e2 from 'assets/experiments/2.png';
import e3 from 'assets/experiments/3.png';
import e4 from 'assets/experiments/4.png';
import e5 from 'assets/experiments/5.png';


export default function ExperimentContent() {
  return (
    <div className="flex flex-col space-y-6">
      {/* e1 */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Experiment 1</h3>
        <div className="md:w-1/2">
          <Image
            src={e1}
            alt="Picture of the author"
            // width={500}
            // height={500}
            quality={100}
          />
        </div>
        <p className="antialiased leading-relaxed text-justify indent-8">
          SEIR equation model is general, so the author will separate R (recovered or death) to R (the group people that recovered) and D (the group people that death) for can find recovered and death cases.
        </p>
      </div>
      <hr />
      {/* e2 */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Experiment 2</h3>
        <div className="md:w-1/2">
          <Image
            src={e2}
            alt="Picture of the author"
            // width={500}
            // height={500}
            quality={100}
          />
        </div>
        <p className="antialiased leading-relaxed text-justify indent-8">
          The author found the output of R and D are accumulative data, so the author creates my algorithm to change accumulative data to non-accumulative data.
        </p>
      </div>
      <hr />
      {/* e3 */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Experiment 3</h3>
        <div className="md:w-1/2">
          <Image
            src={e3}
            alt="Picture of the author"
            // width={500}
            // height={500}
            quality={100}
          />
        </div>
        <p className="antialiased leading-relaxed text-justify indent-8">
          From experiment1, when the author performed tunning the parameter, the author found that the SEIRD equation cannot shift the graph and fitting is not good.
          So, the author will test and add new parameter that can shift the graph to left or right it called “time dependent” parameter.
        </p>
      </div>
      <hr />
      {/* e4 */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Experiment 4</h3>
        <div className="md:w-1/2">
          <Image
            src={e4}
            alt="Picture of the author"
            // width={500}
            // height={500}
            quality={100}
          />
        </div>
        <p className="antialiased leading-relaxed text-justify indent-8">
          {`SEIRD models can explain almost COVID-19 cycle but when people that recovered from COVID-19, they have chance to infect the COVID-19 again (Susceptible (S) => Exposed (E) => Infectious (I) => Recovered (R) => Susceptible (S)), So the author will apply SEIRD to SEIRDS.`}
        </p>
      </div>
      <hr />
      {/* e5 */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg">Experiment 5</h3>
        <div className="md:w-1/2">
          <Image
            src={e5}
            alt="Picture of the author"
            // width={500}
            // height={500}
            quality={100}
          />
        </div>
        <p className="antialiased leading-relaxed text-justify indent-8">
          Use SEIRD equation to apply with LSTM (Start prediction with SEIRD and following with LSTM) because SEIRD using only initial seed parameter and good with short datasets and LSTM need many data to prediction but good with long datasets.
        </p>
      </div>
    </div>

  );
}