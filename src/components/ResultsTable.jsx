import classes from './ResultsTable.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: '2',
  maximumSignificantDigits: '2',
});

const ResultTable = (props) => {
  return(
    <table className={classes.result}>
    <thead>
    <tr>
    <th>year</th>    
      <th>total savings</th>
      <th>interest (year)</th>
      <th>total intereset</th>
      <th>invested capital</th>

    </tr>
    </thead>
      <tbody>
        {props.data.map((yearData) => (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.savingsEndOfYear)}</td>
         <td>{formatter.format(yearData.yearlyInterest)}</td>
        <td>
          {formatter.format(
        yearData.savingsEndOfYear -
        props.initialInvestement -
        yearData.yearlyContribution * yearData.year
        
          )}
        </td>
        <td>
          {formatter.format(
        props.initialInvestement +
        yearData.yearlyContribution +
        yearData.year
          )}
        </td>
      </tr>

        
        )
      
        )}
      </tbody>
    </table>
  )
}

export default ResultTable;