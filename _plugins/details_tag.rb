# _plugins/details_tag.rb

module Jekyll
  module Tags
    class DetailsTag < Liquid::Block

      def initialize(tag_name, markup, tokens)
        super
        # parse key:value pairs
        @id = nil
        @caption = nil

        # Simple regex for id:xxx and caption:"..."
        if markup =~ /id:(\S+)/
          @id = $1
        end

        if markup =~ /caption:"(.+?)"/
          @caption = $1
        else
          @caption = markup.strip
        end
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        caption = converter.convert(@caption).gsub(/<\/?p[^>]*>/, '').chomp
        body = converter.convert(super(context))
        id_attr = @id ? " id='#{@id}'" : ""
        "<details#{id_attr}><summary>#{caption}</summary><div>#{body}</div></details>"
      end

    end
  end
end

Liquid::Template.register_tag('details', Jekyll::Tags::DetailsTag)
