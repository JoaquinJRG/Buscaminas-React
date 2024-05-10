export function Radio({ setRows, setCols, setMines }) {
  return (
    <div class="flex items-center justify-between py-1 px-3 w-80 border border-blue-600 rounded-md">
      <div class="w-20 px-3 border border-blue-300 rounded-md">
        <input class="input" type="radio" name="btn" checked />
          <div class="btn">
            <span class="span">9x9</span>
          </div>
      </div>
      <div class="w-20 px-3 border border-blue-300 rounded-md">
        <input class="input" type="radio" name="btn" />
          <div class="btn">
            <span class="span">16x16</span>
          </div>
      </div>
    </div>
  )
}